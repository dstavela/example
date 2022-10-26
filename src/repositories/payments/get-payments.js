const { Payment} = require('../../models')

const getAllPayments = () => {
    return Payment.findAll()
}

module.exports = {
    getAllPayments
}