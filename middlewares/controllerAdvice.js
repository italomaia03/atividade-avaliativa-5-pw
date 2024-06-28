const NotFoundError = require("../errors/notFound.error");
const BadRequestError = require("../errors/badRequest.error");

class ControllerAdvice {
  execute(error, _req, res, _next) {
    if (error instanceof NotFoundError) {
      res.status(error.statusCode).json({
        error: `${error.name}: ${error.message}`,
      });
    }

    if (error instanceof BadRequestError) {
      res.status(error.statusCode).json({
        error: `${error.name}: ${error.message}`,
      });
    }

    res.status(500).json({ error: error });
  }
}

module.exports = new ControllerAdvice();
