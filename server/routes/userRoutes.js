
const express = require('express');
const { getMe, incrementAiRequestCount } = require('../controllers/userController');

const router = express.Router();

router.get('/me', getMe);
router.put('/me/increment-ai', incrementAiRequestCount);

module.exports = router;
