
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    stripeCustomerId: {
        type: String,
        unique: true,
        sparse: true, // Allows null/undefined values to not be unique
    },
    plan: {
        type: String,
        enum: ['free', 'pro', 'advanced'],
        default: 'free',
    },
    subscriptionId: {
        type: String,
        unique: true,
        sparse: true,
    },
    subscriptionStatus: {
        type: String, // e.g., 'active', 'canceled', 'past_due'
    },
    // Usage tracking
    invoiceCount: {
        type: Number,
        default: 0
    },
    aiRequestCount: {
        type: Number,
        default: 0
    },
    // Date when the usage counts should be reset
    currentPeriodEnd: {
        type: Date,
    }
});


UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
});

module.exports = mongoose.model('User', UserSchema);
