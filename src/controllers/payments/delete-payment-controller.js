const {deletePayment} = require("../../use-cases/payments/delete-payment");

const deletePaymentController = async(ctx) => {
    ctx.body = await deletePayment(ctx.request.params.id)
    ctx.status = 204
}

module.exports = {
     deletePaymentController
}