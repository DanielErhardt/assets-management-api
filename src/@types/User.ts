import { z } from 'zod';
import { companyZodType } from './Company';
import { entityZodType } from './Entity';

export const userZodType = entityZodType.extend({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6).optional(),
  role: z.enum(['user', 'manager', 'admin']),
  company: z.union([z.string(), companyZodType]),
});

export type User = z.infer<typeof userZodType>;
