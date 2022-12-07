import { z } from 'zod';
import { entityZodType } from './Entity';

export const assetZodType = entityZodType.extend({
  name: z.string(),
  image: z.string().url(),
  description: z.string(),
  model: z.string(),
  owner: z.string(),
  status: z.enum(['Running', 'Alerting', 'Stopped']),
  health: z.number().min(0).max(100),
}).strict();

export type Asset = z.infer<typeof assetZodType>;
