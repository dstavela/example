const repository = require("../../repositories/tags/get-tag");
const {ApplicationError} = require("../../core/errors");

const getTag = async (tagId) => {
    const tag = await repository.getTagById(tagId)

    if (!tag) {
        throw new ApplicationError({
            message: 'Tag not found',
            status: 404,
            code: 'tag_not_found',
            data: {
                tagId
            }
        })
    }

    return tag
}

module.exports = {
    getTag
}