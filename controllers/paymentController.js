
const Payment = require('../models/Payment');
const Invoice = require('../models/Invoice');

// @desc    Get all payments
// @route   GET /api/payments
exports.getPayments = async (req, res, next) => {
    try {
        const payments = await Payment.find().populate('invoiceId');
        res.status(200).json(payments);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Create new payment
// @route   POST /api/payments
exports.createPayment = async (req, res, next) => {
    try {
        const { invoiceId, amount, method } = req.body;

        const invoice = await Invoice.findById(invoiceId);
        if (!invoice) {
            return res.status(404).json({ message: 'Invoice not found' });
        }

        // Here you might want to update the invoice status if it's fully paid
        // For simplicity, we just create the payment record.
        const payment = await Payment.create({
            invoiceId,
            amount,
            method,
            date: new Date()
        });

        res.status(201).json(payment);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
