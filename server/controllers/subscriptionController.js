
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');

// @desc    Create a Stripe checkout session for a subscription
// @route   POST /api/subscriptions/create-checkout-session
exports.createCheckoutSession = async (req, res) => {
    const { priceId } = req.body;
    const user = req.user;
    const appUrl = process.env.APP_URL || 'http://localhost:9002';

    try {
        let stripeCustomerId = user.stripeCustomerId;
        // Create a Stripe customer if one doesn't exist
        if (!stripeCustomerId) {
            const customer = await stripe.customers.create({ email: user.email, name: 'Demo User' });
            stripeCustomerId = customer.id;
            user.stripeCustomerId = stripeCustomerId;
            await user.save();
        }

        const session = await stripe.checkout.sessions.create({
            customer: stripeCustomerId,
            payment_method_types: ['card'],
            mode: 'subscription',
            line_items: [{
                price: priceId,
                quantity: 1,
            }],
            success_url: `${appUrl}/dashboard/billing?status=success`,
            cancel_url: `${appUrl}/dashboard/billing?status=cancelled`,
        });
        
        res.status(200).json({ url: session.url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error while creating checkout session.' });
    }
};

// @desc    Create a Stripe customer portal session
// @route   POST /api/subscriptions/create-portal-session
exports.createPortalSession = async (req, res) => {
    const user = req.user;
    const appUrl = process.env.APP_URL || 'http://localhost:9002';

    try {
        if (!user || !user.stripeCustomerId) {
            return res.status(400).json({ success: false, message: 'User is not a Stripe customer.' });
        }

        const portalSession = await stripe.billingPortal.sessions.create({
            customer: user.stripeCustomerId,
            return_url: `${appUrl}/dashboard/settings`,
        });

        res.status(200).json({ url: portalSession.url });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error while creating portal session.' });
    }
};
