
export const subscriptionPlans = [
    {
        name: 'Free',
        description: 'For individuals and small teams getting started.',
        price: '$0',
        priceId: '',
        features: [
            '5 invoices per month',
            '5 AI requests per month',
            'Basic reporting',
            'Email support'
        ]
    },
    {
        name: 'Pro',
        description: 'For growing businesses that need more power.',
        price: '$25',
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PLAN_ID || 'price_pro_placeholder',
        isPopular: true,
        features: [
            '50 invoices per month',
            '100 AI requests per month',
            'Advanced reporting and analytics',
            'Priority email support'
        ]
    },
    {
        name: 'Advanced',
        description: 'For large teams and enterprises.',
        price: '$50',
        priceId: process.env.NEXT_PUBLIC_STRIPE_ADVANCED_PLAN_ID || 'price_advanced_placeholder',
        features: [
            'Unlimited invoices',
            'Unlimited AI requests',
            'Custom integrations',
            'Dedicated phone support'
        ]
    }
];

export const planLimits = {
  free: { invoices: 5, aiRequests: 5 },
  pro: { invoices: 50, aiRequests: 100 },
  advanced: { invoices: Infinity, aiRequests: Infinity },
};
