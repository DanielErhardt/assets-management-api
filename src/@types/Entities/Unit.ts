import { z } from 'zod';
import { entityZodType } from './Entity';
import { assetZodType } from './Asset';
import { companyZodType } from './Company';

export const unitZodType = entityZodType.extend({
  name: z.string(),
  assets: z.union([z.string(), z.array(assetZodType)]),
  company: z.union([z.string(), companyZodType]),
}).strict();

export type Unit = z.infer<typeof unitZodType>;
