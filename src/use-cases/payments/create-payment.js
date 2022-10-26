const repository = require("../../repositories/payments/create-payment");

const createPayment = (tag) => {
    return repository.createPayment(tag)
}

module.exports = {
    createPayment
}