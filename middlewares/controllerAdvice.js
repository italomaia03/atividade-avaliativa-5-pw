const NotFoundError = require("../errors/notFound.error");
const BadRequestError = require("../errors/badRequest.error");

class ControllerAdvice {
  execute(error, _req, res, _next) {
    if (error instanceof NotFoundError) {
      res.status(error.statusCode).json({
        error: `${error.message}`,
      });
    } else if (error instanceof BadRequestError) {
      res.status(error.statusCode).json({
        error: `${error.message}`,
      });
    } else if (error.name === "CastError") {
      res.status(400).json({ error: `${error.message}` });
    } else {
      res.status(500).json({ error: error });
    }
  }
}

module.exports = new ControllerAdvice();
