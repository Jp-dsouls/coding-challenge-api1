// routes/qrRoutes.js
const express = require('express');
const qrController = require('../controllers/qrController');

const router = express.Router();

router.post('/qr-factorization', qrController.qrFactorization);

module.exports = router;