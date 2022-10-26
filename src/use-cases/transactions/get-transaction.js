const repository = require("../../repositories/transactions/get-transaction");
const {ApplicationError} = require("../../core/errors");

const getTransaction = async (transactionId) => {
    const transaction = await repository.getTransactionById(transactionId)

    if (!transaction) {
        throw new ApplicationError({
            message: 'Transaction not found',
            status: 404,
            code: 'transaction_not_found',
            data: {
                transactionId
            }
        })
    }

    return transaction
}

module.exports = {
    getTransaction
}