const repository = require("../../repositories/payments/get-payment");
const {ApplicationError} = require("../../core/errors");

const getPayment = async (paymentId) => {
    const payment = await repository.getPaymentById(paymentId)

    if (!payment) {
        throw new ApplicationError({
            message: 'Payment not found',
            status: 404,
            code: 'payment_not_found',
            data: {
                paymentId
            }
        })
    }

    return payment
}

module.exports = {
    getPayment
}