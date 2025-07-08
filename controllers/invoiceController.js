
const Invoice = require('../models/Invoice');
const Client = require('../models/Client');

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
        const { client: clientData, ...invoiceData } = req.body;

        // Find or create client based on email
        let client = await Client.findOneAndUpdate(
            { email: clientData.email },
            clientData,
            { new: true, upsert: true, runValidators: true }
        );
        
        invoiceData.client = client._id;

        const invoice = await Invoice.create(invoiceData);
        const populatedInvoice = await Invoice.findById(invoice._id).populate('client');

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
