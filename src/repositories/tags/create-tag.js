const {Tag} = require('../../models')

const createTag = (data) => {
    return Tag.create(data)
}

module.exports = {
    createTag
}