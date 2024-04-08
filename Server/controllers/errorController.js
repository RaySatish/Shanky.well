const AppError = require("../utils/appError");

const handleCastError = (err) => {
  const message = `Invalid ${err.path} : ${err.value}`;
  return new AppError(message, 400);
};

const handleDublicateFields = (err) => {
  const value = err.keyValue.name;
  const message = `Duplicate field value : ${value}. Please enter another value`;

  return new AppError(message, 400);
};

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const handleJsonWebTokenError = (err) =>
  new AppError("Invalid token, Please login again !", 401);

const handleTokenExpiredError = (err) =>
  new AppError("Token Expired, Please login again !", 401);

const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      errorStack: err.stack,
    });
  } else {
    res.status(err.statusCode).json({
      message: "Something went wrong !",
      status: err.status,
    });
  }
};

const sendErrorProd = (err, req, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error("ERROR ⛔ : ", err);

    res.status(500).json({
      status: "error",
      message: "something went very wrong",
    });
  }
};

// GLOBAL ERROR HANDLER
// In Express, middleware having 4 arguments are refered as error handler
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (err.name === "CastError") error = handleCastError(error);
    if (err.code === 11000) error = handleDublicateFields(error);
    if (err.name === "ValidationError") error = handleValidationError(error);
    if (err.name === "JsonWebTokenError")
      error = handleJsonWebTokenError(error);
    if (err.name === "TokenExpiredError")
      error = handleTokenExpiredError(error);

    sendErrorProd(error, req, res);
  }
};
