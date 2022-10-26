const {createTag} = require("../../use-cases/tags/create-tag");
const createTagController = async (ctx) => {
    ctx.body = await createTag(ctx.request.body)
    ctx.status = 201
}

module.exports = {
     createTagController
}