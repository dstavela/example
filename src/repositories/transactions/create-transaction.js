const {Transaction} = require("../../models");
const getTransactionById = (id) => {
    return Transaction.findByPk(id, {paranoid: false})
}

const createTransaction = (data) => {
    return Transaction.create(data)
}

const restoreInstance = (instance) => {
    return instance.restore()
}

module.exports = {
    createTransaction,
    getTransactionById,
    restoreInstance
}