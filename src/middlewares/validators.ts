/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from 'express';
import { ZodSchema } from 'zod';
import {
  assetHealthZodType, assetStatusZodType, assetZodType,
  companyZodType, credentialsZodType, unitZodType, userZodType,
} from '../@types/ZodTypes';

const parseData = (data: unknown, schema: ZodSchema) => {
  const parsed = schema.safeParse(data);
  if (!parsed.success) throw parsed.error;
};

const login: RequestHandler = (req, _res, next) => {
  parseData(req.body, credentialsZodType);
  next();
};

const newUser: RequestHandler = (req, _res, next) => {
  parseData(req.body, userZodType);
  next();
};

const newAsset: RequestHandler = (req, _res, next) => {
  parseData(req.body, assetZodType);
  next();
};

const newUnit: RequestHandler = (req, _res, next) => {
  parseData(req.body, unitZodType);
  next();
};

const newCompany: RequestHandler = (req, _res, next) => {
  parseData(req.body, companyZodType);
  next();
};

const assetHealth: RequestHandler = (req, _res, next) => {
  const { params: { newHealth } } = req;
  parseData(Number(newHealth), assetHealthZodType);
  next();
};

const assetStatus: RequestHandler = (req, _res, next) => {
  const { params: { newStatus } } = req;
  parseData(newStatus, assetStatusZodType);
  next();
};

export default {
  login,
  newUser,
  newAsset,
  newUnit,
  newCompany,
  assetHealth,
  assetStatus,
};
