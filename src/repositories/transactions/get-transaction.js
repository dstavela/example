const {Transaction} = require("../../models");
const getTransactionById = (id) => {
    return Transaction.findByPk(id)
}

module.exports = {
    getTransactionById
}