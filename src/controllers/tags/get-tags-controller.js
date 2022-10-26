
const {getTags} = require("../../use-cases/tags/get-tags");
const getTagsController = async (ctx) => {
    ctx.body = await getTags()
    ctx.status = 200
}

module.exports = {
     getTagsController
}