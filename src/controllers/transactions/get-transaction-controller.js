const {getTransaction} = require("../../use-cases/transactions/get-transaction");
const getTransactionController = async(ctx) => {
    ctx.body = await getTransaction(ctx.request.params.id)
    ctx.status = 200
}

module.exports = {
    getTransactionController
}