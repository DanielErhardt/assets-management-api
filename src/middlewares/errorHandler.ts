import { ErrorRequestHandler } from 'express';
import codes from 'http-status-codes';
import { JsonWebTokenError } from 'jsonwebtoken';
import { ZodError } from 'zod';
import RequestError from '../utils/RequestError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof RequestError) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ message });
  }

  if (error instanceof ZodError) {
    const { issues: details } = error;
    return res.status(codes.BAD_REQUEST).json({
      message: 'Request has invalid inputs. Please, see details property for more info.',
      details,
    });
  }

  if (error instanceof JsonWebTokenError) {
    return res.status(codes.UNAUTHORIZED).json({
      message: 'Token validation generated an error.',
      details: error.message,
    });
  }

  // Sometimes the response doesn't show error properties if they are not deconstructed like this.
  const { message, name, stack } = error as Error;

  return res.status(codes.INTERNAL_SERVER_ERROR).json({
    message: 'An unhandled error has occured. Please, see details property for more info.',
    details: {
      fullError: error, message, name, stack,
    },
  });
};

export default errorHandler;
