
const express = require('express');
const { getPayments, createPayment } = require('../controllers/paymentController');

const router = express.Router();

router.route('/').get(getPayments).post(createPayment);

module.exports = router;
