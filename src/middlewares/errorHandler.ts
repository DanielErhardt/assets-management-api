import { ErrorRequestHandler } from 'express';
import codes from 'http-status-codes';
import { ZodError } from 'zod';
import RequestError from '../utils/RequestError';

const errorHandler: ErrorRequestHandler = (error, _req, res) => {
  if (error instanceof RequestError) {
    const { statusCode, message } = error;
    return res.status(statusCode).json({ message });
  }

  if (error instanceof ZodError) {
    const { issues: details } = error;
    return res.status(codes.BAD_REQUEST).json({
      message: 'Request body is invalid. Please, see details property for more info.',
      details,
    });
  }

  // Sometimes the response doesn't show error properties if they are not deconstructed like this.
  const { message, name, stack } = error as Error;

  return res.status(codes.INTERNAL_SERVER_ERROR).json({
    message: 'An unhandled error has occured. Please, see details property for more info.',
    details: {
      message, name, stack, fullError: error,
    },
  });
};

export default errorHandler;
