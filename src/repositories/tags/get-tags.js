const {Tag} = require('../../models')

const getAllTags = () => {
    return Tag.findAll()
}

module.exports = {
    getAllTags
}