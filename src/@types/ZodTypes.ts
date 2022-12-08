import { z } from 'zod';

export const userRoleZodType = z.enum(['user', 'manager', 'admin']);

export const assetStatusZodType = z.enum(['Running', 'Alerting', 'Stopped']);

export const assetHealthZodType = z.number().min(0).max(100);

export const credentialsZodType = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const entityZodType = z.object({
  _id: z.string().optional(),
});

export const companyZodType = entityZodType.extend({
  name: z.string(),
  employees: z.array(z.string()),
  assets: z.array(z.string()),
  units: z.array(z.string()),
}).strict();

export const userZodType = entityZodType.extend({
  name: z.string(),
  email: z.string().email(),
  password: z.string().optional(),
  role: z.enum(['user', 'manager', 'admin']),
  company: z.string(),
}).strict();

export const assetZodType = entityZodType.extend({
  name: z.string(),
  image: z.string().url(),
  description: z.string(),
  model: z.string(),
  owner: z.string(),
  status: assetStatusZodType,
  health: z.number().min(0).max(100),
}).strict();

export const unitZodType = entityZodType.extend({
  name: z.string(),
  assets: z.array(z.string()),
  owner: z.string(),
}).strict();

export const archiveZodType = entityZodType.extend({
  collectionName: z.string(),
  document: z.record(z.string(), z.any()),
  archivedAt: z.date().optional(),
}).strict();
