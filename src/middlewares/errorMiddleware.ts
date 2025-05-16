import { NextFunction, Request, Response } from "express";
// import { HttpException } from "../exceptions/exception";
// import { APP_ERROR_MESSAGE } from "../constants/constant";

//You can use a crash reporting tool like bugsnag here
function errorMiddleware(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.status ? error.status : 500;
  const message = status === 500 ? "Server error" : error.message;
  const errors = error.error;
  response.status(status).send({ status, message, error: errors });
}

export default errorMiddleware;
