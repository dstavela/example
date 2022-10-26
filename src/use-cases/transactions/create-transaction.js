const repository = require("../../repositories/transactions/create-transaction");

const createTransaction = async (data) => {
    let transaction = await repository.getTransactionById(data.id)

    if (!transaction) {
        return await repository.createTransaction(data)
    }

    if (transaction.deletedAt) {
        return await repository.restoreInstance(transaction)
    }

    return transaction
}

module.exports = {
    createTransaction
}