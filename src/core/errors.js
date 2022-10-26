class ApplicationError {
  constructor({
    message = 'Internal Server Error',
    code = 'internal_server_error',
    status = 500,
    validationErrors,
    data,
    previous,
  }) {
    this.message = message;
    this.code = code;
    this.status = status;
    this.validationErrors = validationErrors;
    this.data = data;
    this.previous = previous;
  }
}

module.exports = {
  ApplicationError,
};
