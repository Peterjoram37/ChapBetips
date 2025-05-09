class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    async processPayment(req, res) {
        try {
            const { userId, amount } = req.body;
            const paymentResult = await this.paymentService.processPayment(userId, amount);
            res.status(200).json({ success: true, data: paymentResult });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async generateActivationKey(req, res) {
        try {
            const { userId } = req.body;
            const activationKey = await this.paymentService.generateActivationKey(userId);
            res.status(200).json({ success: true, activationKey });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

export default PaymentController;