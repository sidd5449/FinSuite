
const express = require('express');
const {
    createCheckoutSession,
    createPortalSession,
} = require('../controllers/subscriptionController');

const router = express.Router();

router.post('/create-checkout-session', createCheckoutSession);
router.post('/create-portal-session', createPortalSession);

module.exports = router;
