const {updatePayment} = require("../../use-cases/payments/update-payment");
const updatePaymentController = async(ctx) => {
    ctx.body = await updatePayment(ctx.request.params.id, ctx.request.body)
    ctx.status = 200
}

module.exports = {
     updatePaymentController
}