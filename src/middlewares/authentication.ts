import { NextFunction, Request, RequestHandler } from 'express';
import RequestError from '../utils/RequestError';
import Token from '../utils/Token';

export type UserRole = 'user' | 'manager' | 'admin';

const getAccessLevel = (role: UserRole): number => {
  const level = { user: 1, manager: 2, admin: 3 };
  return level[role];
};

const auth = (req: Request, next: NextFunction, requiredRole: UserRole) => {
  const { headers: { authorization } } = req;

  if (!authorization) throw RequestError.unauthorized('Token not found.');

  const {
    id, role,
  } = Token.validate(authorization);

  if (!role) throw RequestError.badRequest('Token has no role assigned to it.');

  const granted = (getAccessLevel(requiredRole) - getAccessLevel(role)) >= 0;

  if (!granted) throw RequestError.unauthorized(`This route requires ${requiredRole} role.`);

  req.headers.userId = id;

  return next();
};

const user: RequestHandler = (req, _res, next) => {
  auth(req, next, 'user');
};

const manager: RequestHandler = (req, _res, next) => {
  auth(req, next, 'manager');
};

const admin: RequestHandler = (req, _res, next) => {
  auth(req, next, 'admin');
};

export default { user, manager, admin };
