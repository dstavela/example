
const {getTransactions} = require("../../use-cases/transactions/get-transactions");
const getTransactionsController = async (ctx) => {
    ctx.body = await getTransactions()
    ctx.status = 200
}

module.exports = {
    getTransactionsController
}