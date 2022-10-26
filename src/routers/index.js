const Router = require('@koa/router');
const { transactionsRouter } = require('./transactions');
const { paymentsRouter } = require('./payments');
const { tagsRouter } = require('./tags');

const router = new Router({
  prefix: '/api',
});

router.use(transactionsRouter.routes());
router.use(paymentsRouter.routes());
router.use(tagsRouter.routes());

module.exports = {
  router,
};
