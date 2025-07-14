
const mongoose = require('mongoose');

const LineItemSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
});

const InvoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
    },
    client: {
        type: mongoose.Schema.ObjectId,
        ref: 'Client',
        required: true,
    },
    invoiceDate: {
        type: Date,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    lineItems: [LineItemSchema],
    subtotal: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        default: 0
    },
    taxRate: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP'],
        required: true,
    },
    status: {
        type: String,
        enum: ['paid', 'pending', 'overdue'],
        default: 'pending',
    },
    signature: {
        type: String,
    },
    notes: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

InvoiceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        if (returnedObject.client && returnedObject.client._id) {
            returnedObject.client.id = returnedObject.client._id.toString();
            delete returnedObject.client._id;
            delete returnedObject.client.__v;
        }
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
