
const express = require('express');
const {
    getInvoices,
    getInvoice,
    createInvoice,
    updateInvoice,
    deleteInvoice,
    updateInvoiceStatus,
    sendInvoiceReminder,
    confirmStripePayment,
} = require('../controllers/invoiceController');

const router = express.Router();

router.route('/').get(getInvoices).post(createInvoice);

router
    .route('/:id')
    .get(getInvoice)
    .put(updateInvoice)
    .delete(deleteInvoice);

router.route('/:id/status').put(updateInvoiceStatus);

router.route('/:id/confirm-payment').post(confirmStripePayment);

router.route('/:id/remind').post(sendInvoiceReminder);

module.exports = router;
