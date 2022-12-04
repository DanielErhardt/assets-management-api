import { z } from 'zod';
import { entityZodType } from './Entity';

export const userZodType = entityZodType.extend({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['user', 'manager', 'admin']),
  companyId: z.string(),
});

export type User = z.infer<typeof userZodType>;
