const Router = require('@koa/router');

const { bodyValidationMiddleware } = require('../core/middlewares');
const { createPaymentInputSchema, updatePaymentInputSchema } = require('../utils/validation-schema');
const { getPaymentsController } = require('../controllers/payments/get-payments-controller');
const { getPaymentController } = require('../controllers/payments/get-payment-controller');
const { deletePaymentController } = require('../controllers/payments/delete-payment-controller');
const { updatePaymentController } = require('../controllers/payments/update-payment-controller');
const { createPaymentController } = require('../controllers/payments/create-payment-controller');

const paymentsRouter = new Router({ prefix: '/payments' });

paymentsRouter.post('/', bodyValidationMiddleware(createPaymentInputSchema), createPaymentController);
paymentsRouter.get('/', getPaymentsController);
paymentsRouter.get('/:id', getPaymentController);
paymentsRouter.put('/:id', bodyValidationMiddleware(updatePaymentInputSchema), updatePaymentController);
paymentsRouter.delete('/:id', deletePaymentController);

module.exports = {
  paymentsRouter,
};
