import codes from 'http-status-codes';

class RequestError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }

  public static badRequest(message: string) {
    return new RequestError(codes.BAD_REQUEST, message);
  }

  public static notFound(message: string) {
    return new RequestError(codes.NOT_FOUND, message);
  }

  public static unauthorized(message: string) {
    return new RequestError(codes.UNAUTHORIZED, message);
  }

  public static conflict(message: string) {
    return new RequestError(codes.CONFLICT, message);
  }
}

export default RequestError;
