const { ApplicationError } = require('../core/errors');

const formatValidationErrors = (details) => {
  const errors = [];

  details.forEach((detail) => {
    errors.push({
      path: detail.path.join('.'),
      error: detail.type,
    });
  });

  return errors;
};
const validate = async (schema, data) => {
  try {
    return await schema.validateAsync(data, {
      abortEarly: false,
    });
  } catch (e) {
    throw new ApplicationError({
      message: 'Validation Error',
      status: 400,
      code: 'validation_error',
      validationErrors: formatValidationErrors(e.details),
    });
  }
};

module.exports = {
  validate,
};
