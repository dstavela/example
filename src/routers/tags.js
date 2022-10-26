const Router = require('@koa/router');

const { bodyValidationMiddleware } = require('../core/middlewares');
const { createTagInputSchema } = require('../utils/validation-schema');
const { createTagController } = require('../controllers/tags/create-tag-controller');
const { getTagController } = require('../controllers/tags/get-tag-controller');
const { getTagsController } = require('../controllers/tags/get-tags-controller');
const { deleteTagController } = require('../controllers/tags/delete-tag-controller');
const { updateTagController } = require('../controllers/tags/update-tag-controller');

const tagsRouter = new Router({ prefix: '/tags' });

tagsRouter.post('/', bodyValidationMiddleware(createTagInputSchema), createTagController);
tagsRouter.get('/', getTagsController);
tagsRouter.get('/:id', getTagController);
tagsRouter.put('/:id', updateTagController);
tagsRouter.delete('/:id', deleteTagController);

module.exports = {
  tagsRouter,
};
