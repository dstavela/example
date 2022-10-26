const {Tag} = require('../../models')

const getTagById = (id) => {
    return Tag.findByPk(id)
}

const updateInstance = (instance, data) => {
    return instance.update(data)
}

module.exports = {
    getTagById,
    updateInstance
}