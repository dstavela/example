const { Payment} = require('../../models')

const getPaymentById = (id) => {
    return Payment.findByPk(id)
}

module.exports = {
    getPaymentById
}