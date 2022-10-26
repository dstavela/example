const {Transaction} = require("../../models");
const deleteTransactionById = (id) => {
    return Transaction.destroy({where: {id}})
}

module.exports = {
    deleteTransactionById
}