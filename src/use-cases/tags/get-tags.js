const repository = require("../../repositories/tags/get-tags");

const getTags = () => {
    return repository.getAllTags()
}

module.exports = {
    getTags
}