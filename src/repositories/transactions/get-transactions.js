const {Transaction} = require("../../models");
const getAllTransactions = () => {
    return Transaction.findAll()
}

module.exports = {
    getAllTransactions
}