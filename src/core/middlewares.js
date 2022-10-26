const { validate } = require('../utils/validation');
const { ApplicationError } = require('./errors');

const bodyValidationMiddleware = (validationSchema) => async (ctx, next) => {
  ctx.request.body = await validate(validationSchema, ctx.request.body);
  await next();
};

const queryValidationMiddleware = (validationSchema) => async (ctx, next) => {
  ctx.request.query = await validate(validationSchema, ctx.request.query);
  await next();
};

const errorHandlingMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    let error;

    if (!(e instanceof ApplicationError)) {
      error = new ApplicationError({
        message: 'Internal Server Error',
        status: 500,
        code: 'internal_server_error',
        previous: e,
      });
    } else {
      error = e;
    }

    ctx.body = error;
    ctx.status = error.status;
  }
};

module.exports = {
  bodyValidationMiddleware,
  queryValidationMiddleware,
  errorHandlingMiddleware,
};
