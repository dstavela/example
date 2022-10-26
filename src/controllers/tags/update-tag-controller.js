const {updateTag} = require("../../use-cases/tags/update-tag");

const updateTagController = async (ctx) => {
    ctx.body = await updateTag(ctx.request.params.id, ctx.request.body)
    ctx.status = 200
}

module.exports = {
    updateTagController
}