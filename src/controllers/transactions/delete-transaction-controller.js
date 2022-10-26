const {deleteTransaction} = require("../../use-cases/transactions/delete-transaction");

const deleteTransactionController = async(ctx) => {
    await deleteTransaction(ctx.request.params.id)
    ctx.status = 204
}

module.exports = {
    deleteTransactionController
}