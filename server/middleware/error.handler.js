const logErrors = (error, req, res, next) => {
    console.log(error, 1);
    next(error)
};

const errorHandler = (error, req, res, next) => {
    console.log(error, 2);
    res.status(500).json({
        message: error.message,
        stack: error.stack
    });
};

export {
    logErrors,
    errorHandler
};