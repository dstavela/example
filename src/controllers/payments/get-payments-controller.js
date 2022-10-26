const {getPayments} = require("../../use-cases/payments/get-payments");
const getPaymentsController = async(ctx) => {
    ctx.body = await getPayments()
    ctx.status = 200
}

module.exports = {
    getPaymentsController
}