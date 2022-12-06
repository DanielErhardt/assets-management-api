import { z } from 'zod';
import { entityZodType } from './Entity';

export const companyZodType = entityZodType.extend({
  name: z.string().min(3),
});

export type Company = z.infer<typeof companyZodType>;
