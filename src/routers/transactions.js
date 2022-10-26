const Router = require('@koa/router');

const { createTransactionController } = require('../controllers/transactions/create-transaction-controller');
const { getTransactionsController } = require('../controllers/transactions/get-transactions-controller');
const { getTransactionController } = require('../controllers/transactions/get-transaction-controller');
const { bodyValidationMiddleware } = require('../core/middlewares');
const { deleteTransactionController } = require('../controllers/transactions/delete-transaction-controller');
const { createTransactionInputSchema } = require('../utils/validation-schema');

const transactionsRouter = new Router({ prefix: '/transactions' });

transactionsRouter.post('/', bodyValidationMiddleware(createTransactionInputSchema), createTransactionController);
transactionsRouter.get('/', getTransactionsController);
transactionsRouter.get('/:id', getTransactionController);
transactionsRouter.delete('/:id', deleteTransactionController);

module.exports = {
  transactionsRouter,
};
