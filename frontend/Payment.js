
const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    invoiceId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Invoice',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    method: {
        type: String,
        required: true,
        enum: ['Credit Card', 'Bank Transfer', 'PayPal', 'Stripe', 'Other', 'Manual Entry'],
        default: 'Other'
    },
});

PaymentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Payment', PaymentSchema);
