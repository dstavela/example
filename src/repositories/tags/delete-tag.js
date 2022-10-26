const {Tag} = require('../../models')

const deleteTagById = (id) => {
    return Tag.destroy({where: {id}})
}

module.exports = {
    deleteTagById
}