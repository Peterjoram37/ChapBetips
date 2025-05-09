class PaymentService {
    constructor(paymentModel, activationKeyModel) {
        this.paymentModel = paymentModel;
        this.activationKeyModel = activationKeyModel;
    }

    async processPayment(userId, amount) {
        // Logic to process the payment
        // This could involve interacting with a payment gateway API
        // For now, we will simulate a successful payment
        const paymentResult = {
            userId,
            amount,
            status: 'success',
            transactionId: this.generateTransactionId(),
        };

        // Save payment result to the database
        await this.paymentModel.create(paymentResult);
        return paymentResult;
    }

    generateActivationKey(userId) {
        const activationKey = this.generateRandomKey();
        // Save the activation key associated with the user
        this.activationKeyModel.create({ userId, key: activationKey });
        return activationKey;
    }

    generateTransactionId() {
        return 'txn_' + Math.random().toString(36).substr(2, 9);
    }

    generateRandomKey() {
        return Math.random().toString(36).substr(2, 15);
    }
}

export default PaymentService;
