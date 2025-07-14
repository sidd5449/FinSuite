const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');

// @desc    Create a payment intent
// @route   POST /api/stripe/create-payment-intent
exports.createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency } = req.body;

        if (!amount || !currency) {
            return res.status(400).json({ message: 'Amount and currency are required' });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Stripe expects amount in cents
            currency: currency.toLowerCase(),
            metadata: { integration_check: 'accept_a_payment' },
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc    Handle Stripe webhooks
// @route   POST /api/stripe/webhook
exports.handleWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
        console.error(`❌ Error message: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object;
                const user = await User.findOne({ email: session.customer_email });
                if (user && session.subscription) {
                    user.subscriptionId = session.subscription;
                    user.stripeCustomerId = session.customer;
                    // The subscription data will be handled by customer.subscription.updated
                    await user.save();
                }
                break;
            }
            case 'customer.subscription.updated': {
                const subscription = event.data.object;
                const user = await User.findOne({ stripeCustomerId: subscription.customer });

                if (user) {
                    const priceId = subscription.items.data[0].price.id;
                    let plan = 'free';
                    if (priceId === process.env.STRIPE_PRO_PLAN_ID) plan = 'pro';
                    if (priceId === process.env.STRIPE_ADVANCED_PLAN_ID) plan = 'advanced';

                    user.plan = plan;
                    user.subscriptionStatus = subscription.status;
                    user.currentPeriodEnd = new Date(subscription.current_period_end * 1000);
                    await user.save();
                }
                break;
            }
            case 'customer.subscription.deleted': {
                const subscription = event.data.object;
                const user = await User.findOne({ subscriptionId: subscription.id });
                if (user) {
                    user.plan = 'free';
                    user.subscriptionStatus = 'canceled';
                    user.subscriptionId = null;
                    await user.save();
                }
                break;
            }
            case 'invoice.payment_succeeded': {
                const invoice = event.data.object;
                 if (invoice.billing_reason === 'subscription_cycle') {
                    const user = await User.findOne({ subscriptionId: invoice.subscription });
                    if (user) {
                        user.invoiceCount = 0;
                        user.aiRequestCount = 0;
                        user.currentPeriodEnd = new Date(invoice.period_end * 1000);
                        await user.save();
                    }
                }
                break;
            }
            default:
            // console.log(`Unhandled event type ${event.type}`);
        }
    } catch (error) {
        console.error('Error handling webhook:', error);
        return res.status(500).json({ error: 'Webhook handler failed.' });
    }

    res.status(200).json({ received: true });
};
