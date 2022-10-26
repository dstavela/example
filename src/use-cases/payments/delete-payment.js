const repository = require("../../repositories/payments/delete-payment");

const deletePayment = async (paymentId) => {
    await repository.deletePaymentById(paymentId)
}

module.exports = {
    deletePayment
}