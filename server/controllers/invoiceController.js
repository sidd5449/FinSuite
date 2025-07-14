
const Invoice = require('../models/Invoice');
const Client = require('../models/Client');
const Payment = require('../models/Payment');
const User = require('../models/User');
const emailService = require('../services/emailService');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const planLimits = {
  free: { invoices: 5, aiRequests: 5 },
  basic: { invoices: 10, aiRequests: 25 },
  pro: { invoices: 50, aiRequests: 100 },
  advanced: { invoices: Infinity, aiRequests: Infinity },
};

// @desc    Get all invoices
// @route   GET /api/invoices
exports.getInvoices = async (req, res, next) => {
    try {
        let query;
        if (req.query.clientId) {
            query = Invoice.find({ client: req.query.clientId });
        } else {
            query = Invoice.find();
        }

        const invoices = await query.sort({ invoiceDate: -1 }).populate('client');
        res.status(200).json(invoices);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get single invoice
// @route   GET /api/invoices/:id
exports.getInvoice = async (req, res, next) => {
    try {
        const invoice = await Invoice.findById(req.params.id).populate('client');
        if (!invoice) {
            return res.status(404).json({ success: false, message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Create new invoice
// @route   POST /api/invoices
exports.createInvoice = async (req, res, next) => {
    try {
        const user = req.user;
        const userPlan = user.plan || 'free';
        const limits = planLimits[userPlan];

        if (user.invoiceCount >= limits.invoices) {
            return res.status(403).json({ success: false, message: `You have reached your monthly limit of ${limits.invoices} invoices. Please upgrade your plan.` });
        }

        const { client: clientData, ...invoiceData } = req.body;

        // Find or create client based on email
        let client = await Client.findOneAndUpdate(
            { email: clientData.email },
            clientData,
            { new: true, upsert: true, runValidators: true }
        );
        
        invoiceData.client = client._id;

        // Ensure total is correctly calculated on the backend
        const subtotal = invoiceData.lineItems.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
        const tax = invoiceData.tax || 0;
        invoiceData.subtotal = subtotal;
        invoiceData.total = subtotal + tax;

        const invoice = await Invoice.create(invoiceData);
        const populatedInvoice = await Invoice.findById(invoice._id).populate('client');
        
        // Increment usage count after successful creation
        user.invoiceCount += 1;
        await user.save();

        // Send email notification without blocking the response
        emailService.sendInvoiceGeneratedEmail(populatedInvoice).catch(err => {
            console.error("Failed to send invoice generation email:", err);
        });

        res.status(201).json(populatedInvoice);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Update invoice
// @route   PUT /api/invoices/:id
exports.updateInvoice = async (req, res, next) => {
    try {
        const { client: clientData, ...invoiceData } = req.body;

        // Find or create client based on email
        let client = await Client.findOneAndUpdate(
            { email: clientData.email },
            clientData,
            { new: true, upsert: true, runValidators: true }
        );

        invoiceData.client = client._id;

        // Ensure total is correctly calculated on the backend
        const subtotal = invoiceData.lineItems.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
        const tax = invoiceData.tax || 0;
        invoiceData.subtotal = subtotal;
        invoiceData.total = subtotal + tax;


        let invoice = await Invoice.findByIdAndUpdate(req.params.id, invoiceData, {
            new: true,
            runValidators: true,
        }).populate('client');

        if (!invoice) {
            return res.status(404).json({ success: false, message: 'Invoice not found' });
        }
        res.status(200).json(invoice);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Delete invoice
// @route   DELETE /api/invoices/:id
exports.deleteInvoice = async (req, res, next) => {
    try {
        const invoice = await Invoice.findById(req.params.id);
        if (!invoice) {
            return res.status(404).json({ success: false, message: 'Invoice not found' });
        }
        await invoice.deleteOne();
        res.status(204).json({ success: true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Confirm a stripe payment and update invoice
// @route   POST /api/invoices/:id/confirm-payment
exports.confirmStripePayment = async (req, res, next) => {
    try {
        const { paymentIntentId } = req.body;
        const invoiceId = req.params.id;

        if (!paymentIntentId) {
            return res.status(400).json({ success: false, message: 'Payment Intent ID is required.' });
        }

        const invoice = await Invoice.findById(invoiceId);
        if (!invoice) {
            return res.status(404).json({ success: false, message: 'Invoice not found.' });
        }
        
        if (invoice.status === 'paid') {
            const populatedInvoice = await invoice.populate('client');
            return res.status(200).json(populatedInvoice); // Already paid
        }

        // Retrieve and verify payment intent from Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
        
        if (paymentIntent.status !== 'succeeded') {
            return res.status(400).json({ success: false, message: 'Payment not successful.' });
        }

        const chargeAmount = paymentIntent.amount / 100;
        if (chargeAmount < invoice.total) {
            // This is a partial payment. For simplicity, we'll treat it as full if it's close.
            // A real app would handle partial payments more gracefully.
            console.warn(`Partial payment detected. Paid: ${chargeAmount}, Expected: ${invoice.total}`);
        }
        
        // Update invoice to 'paid'
        invoice.status = 'paid';
        await invoice.save();

        // Create payment record
        await Payment.create({
            invoiceId: invoice._id,
            amount: chargeAmount,
            method: 'Stripe', // New payment method
            date: new Date(),
        });

        const populatedInvoice = await Invoice.findById(invoiceId).populate('client');

        res.status(200).json(populatedInvoice);
    } catch (err) {
         res.status(500).json({ success: false, message: err.message });
    }
};


// @desc    Update invoice status
// @route   PUT /api/invoices/:id/status
exports.updateInvoiceStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        if (!['paid', 'pending', 'overdue'].includes(status)) {
            return res.status(400).json({ success: false, message: 'Invalid status value' });
        }

        const invoice = await Invoice.findById(req.params.id);

        if (!invoice) {
            return res.status(404).json({ success: false, message: 'Invoice not found' });
        }
        
        const originalStatus = invoice.status;
        
        if (originalStatus === status) {
            const populatedInvoice = await invoice.populate('client');
            return res.status(200).json(populatedInvoice); // No change needed
        }

        invoice.status = status;
        await invoice.save();
        
        // If status is changed to 'paid' for the first time, create a payment record
        if (status === 'paid' && originalStatus !== 'paid') {
            await Payment.create({
                invoiceId: invoice._id,
                amount: invoice.total,
                method: 'Manual Entry',
                date: new Date(),
            });
        }

        // If status is changed *away* from paid, delete any associated manual payment
        if (originalStatus === 'paid' && status !== 'paid') {
            await Payment.deleteOne({ invoiceId: invoice._id, method: 'Manual Entry' });
        }

        const populatedInvoice = await invoice.populate('client');
        res.status(200).json(populatedInvoice);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Send payment reminder for an invoice
// @route   POST /api/invoices/:id/remind
exports.sendInvoiceReminder = async (req, res, next) => {
    try {
        const invoice = await Invoice.findById(req.params.id).populate('client');
        if (!invoice) {
            return res.status(404).json({ success: false, message: 'Invoice not found' });
        }

        if (invoice.status === 'paid') {
            return res.status(400).json({ success: false, message: 'Cannot send reminder for a paid invoice.' });
        }

        await emailService.sendPaymentReminderEmail(invoice);

        res.status(200).json({ success: true, message: 'Reminder email sent successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
