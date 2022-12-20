import { z } from 'zod';
import {
  archiveZodType, assetZodType, companyZodType,
  entityZodType, unitZodType, userZodType,
} from './ZodTypes';

export type Entity = z.infer<typeof entityZodType>;

export type User = Omit<z.infer<typeof userZodType>, 'company'> & {
  company: string | Record<string, unknown>;
};

export type Company = Omit<z.infer<typeof companyZodType>, 'employees' | 'assets' | 'units'> & {
  employees: string[] | Record<string, unknown>[];
  assets: string[] | Record<string, unknown>[];
  units: string[] | Record<string, unknown>[];
};

export type Unit = Omit<z.infer<typeof unitZodType>, 'assets' | 'owner'> & {
  assets: string[] | Record<string, unknown>[];
  owner: string | Record<string, unknown>;
};

export type Asset = Omit<z.infer<typeof assetZodType>, 'owner'> & {
  owner: string | Record<string, unknown>;
};

export type Archive = z.infer<typeof archiveZodType>;
