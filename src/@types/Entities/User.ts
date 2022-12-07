import { z } from 'zod';
import { companyZodType } from './Company';
import { entityZodType } from './Entity';

export const userZodType = entityZodType.extend({
  name: z.string(),
  email: z.string().email(),
  password: z.string().optional(),
  role: z.enum(['user', 'manager', 'admin']),
  company: z.union([z.string(), companyZodType]),
}).strict();

export type User = z.infer<typeof userZodType>;
