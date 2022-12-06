import { z } from 'zod';
import { entityZodType } from './Entity';

export const companyZodType = entityZodType.extend({
  name: z.string(),
}).strict();

export type Company = z.infer<typeof companyZodType>;
