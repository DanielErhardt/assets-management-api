import { z } from 'zod';
import {
  archiveZodType, assetZodType, companyZodType,
  entityZodType, unitZodType, userZodType,
} from './ZodTypes';

export type Entity = z.infer<typeof entityZodType>;

export type User = z.infer<typeof userZodType>;

export type Company = z.infer<typeof companyZodType>;

export type Unit = z.infer<typeof unitZodType>;

export type Asset = z.infer<typeof assetZodType>;

export type Archive = z.infer<typeof archiveZodType>;
