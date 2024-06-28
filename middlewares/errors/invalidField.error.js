class InvalidFieldError extends BadRequestError {
  constructor(field) {
    super(`The field '${field}' is invalid.`);
    this.name = "InvalidFieldError";
  }
}

module.exports = InvalidFieldError;
