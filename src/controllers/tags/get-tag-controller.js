
const {getTag} = require("../../use-cases/tags/get-tag");
const getTagController = async (ctx) => {
    ctx.body = await getTag(ctx.request.params.id)
    ctx.status = 200
}

module.exports = {
    getTagController
}