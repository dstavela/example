const {Payment} = require('../../models')

const getPaymentById = (id) => {
    return Payment.findByPk(id)
}

const updateInstance = (instance, data) => {
    return instance.update(data)
}

module.exports = {
    getPaymentById,
    updateInstance
}