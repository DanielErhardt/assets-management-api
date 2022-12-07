import { z } from 'zod';
import { entityZodType } from './Entity';

export const userZodType = entityZodType.extend({
  name: z.string(),
  email: z.string().email(),
  password: z.string().optional(),
  role: z.enum(['user', 'manager', 'admin']),
  company: z.string(),
}).strict();

export type User = z.infer<typeof userZodType>;
