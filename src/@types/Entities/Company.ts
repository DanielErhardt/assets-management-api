import { z } from 'zod';
import { entityZodType } from './Entity';

export const companyZodType = entityZodType.extend({
  name: z.string(),
  employees: z.array(z.string()),
  assets: z.array(z.string()),
  units: z.array(z.string()),
}).strict();

export type Company = z.infer<typeof companyZodType>;
