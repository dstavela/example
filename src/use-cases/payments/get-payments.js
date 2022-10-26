const repository = require("../../repositories/payments/get-payments");

const getPayments = () => {
    return repository.getAllPayments()
}

module.exports = {
    getPayments
}