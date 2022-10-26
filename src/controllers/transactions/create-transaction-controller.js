const {createTransaction} = require("../../use-cases/transactions/create-transaction");
const createTransactionController = async (ctx) => {
    ctx.body = await createTransaction(ctx.request.body)
    ctx.status = 201
}

module.exports = {
    createTransactionController
}