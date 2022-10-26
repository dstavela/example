
const {deleteTag} = require("../../use-cases/tags/delete-tag");
const deleteTagController = async (ctx) => {
    await deleteTag(ctx.request.params.id)
    ctx.status = 204
}

module.exports = {
     deleteTagController
}