const repository = require("../../repositories/transactions/delete-transaction");

const deleteTransaction = async (transactionId) => {
    await repository.deleteTransactionById(transactionId)
}

module.exports = {
    deleteTransaction
}