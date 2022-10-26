const { Payment} = require('../../models')

const createPayment = (data) => {
    return Payment.create(data)
}

module.exports = {
    createPayment
}