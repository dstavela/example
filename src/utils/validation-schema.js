const Joi = require('joi');

const createTransactionInputSchema = Joi.object({
  id: Joi.string().trim().required(),
  name: Joi.string().trim().required(),
  price: Joi.number().required(),
  paidAt: Joi.date().required(),
});

const createPaymentInputSchema = Joi.object({
  transactionId: Joi.string().trim(),
  name: Joi.string().trim().required(),
  price: Joi.number().required(),
  note: Joi.string().trim(),
});

const updatePaymentInputSchema = Joi.object({
  transactionId: Joi.string().trim(),
  name: Joi.string().trim().required(),
  price: Joi.number().required(),
  note: Joi.string().trim(),
});

const createTagInputSchema = Joi.object({
  name: Joi.string().trim().required(),
});
const updateTagInputSchema = Joi.object({
  name: Joi.string().trim().required(),
});

module.exports = {
  createTagInputSchema,
  updateTagInputSchema,
  createTransactionInputSchema,
  createPaymentInputSchema,
  updatePaymentInputSchema,
};
