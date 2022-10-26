const repository = require("../../repositories/tags/create-tag");

const createTag = (tag) => {
    return repository.createTag(tag)
}

module.exports = {
    createTag
}