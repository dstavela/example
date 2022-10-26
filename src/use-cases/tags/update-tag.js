const repository = require("../../repositories/tags/update-tag");
const {ApplicationError} = require("../../core/errors");

const updateTag = async (tagId, data) => {
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

    return await repository.updateInstance(tag, data)
}

module.exports = {
    updateTag
}