const repository = require("../../repositories/transactions/get-transactions");

const getTransactions = () => {
    return repository.getAllTransactions()
}

module.exports = {
    getTransactions
}