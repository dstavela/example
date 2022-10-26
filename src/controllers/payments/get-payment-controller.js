
const {getPayment} = require("../../use-cases/payments/get-payment");
const getPaymentController = async(ctx) => {
    ctx.body = await getPayment(ctx.request.params.id)
    ctx.status = 200
}

module.exports = {
     getPaymentController
}