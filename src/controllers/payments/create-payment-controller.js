const {createPayment} = require("../../use-cases/payments/create-payment");
const createPaymentController = async (ctx, next) => {
    ctx.body = await createPayment(ctx.request.body)
    ctx.status = 201
}

module.exports = {
     createPaymentController
}