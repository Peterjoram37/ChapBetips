const express = require('express');
const PaymentController = require('../controllers/paymentController');

const router = express.Router();
const paymentController = new PaymentController();

router.post('/process-payment', paymentController.processPayment);
router.post('/generate-activation-key', paymentController.generateActivationKey);

module.exports = router;
