const repository = require("../../repositories/payments/update-payment");
const {ApplicationError} = require("../../core/errors");

const updatePayment = async (paymentId, data) => {
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

    return await repository.updateInstance(payment, data)
}

module.exports = {
    updatePayment
}