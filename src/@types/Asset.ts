import { z } from 'zod';
import { companyZodType } from './Company';
import { entityZodType } from './Entity';

export const assetZodType = entityZodType.extend({
  name: z.string().min(3),
  image: z.string().url(),
  description: z.string().min(15),
  model: z.string().min(1),
  owner: z.union([z.string(), companyZodType]),
  status: z.enum(['Running', 'Alerting', 'Stopped']),
  health: z.number().min(0).max(100),
});

export type Asset = z.infer<typeof assetZodType>;
