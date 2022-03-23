const logErrors = (error, req, res, next) => {
  next(error)
};

const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  });
};

export {
  logErrors,
  errorHandler
};