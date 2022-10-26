const repository = require("../../repositories/tags/delete-tag");
const {ApplicationError} = require("../../core/errors");

const deleteTag = async (tagId) => {
    await repository.deleteTagById(tagId)
}

module.exports = {
    deleteTag
}