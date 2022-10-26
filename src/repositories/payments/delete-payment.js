const {Payment} = require('../../models')

const deletePaymentById = (id) => {
    return Payment.destroy({where: {id}})
}


module.exports = {
    deletePaymentById
}