const {Tag} = require('../../models')

const getTagById = (id) => {
    return Tag.findByPk(id)
}

module.exports = {
    getTagById
}