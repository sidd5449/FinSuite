
const express = require('express');
const {
    getClients,
    getClient,
    createClient,
    updateClient,
    deleteClient,
    addClientNote,
} = require('../controllers/clientController');

const router = express.Router();

router.route('/').get(getClients).post(createClient);

router
    .route('/:id')
    .get(getClient)
    .put(updateClient)
    .delete(deleteClient);

router.route('/:id/notes').post(addClientNote);

module.exports = router;
