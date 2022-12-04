import { z } from 'zod';
import { entityZodType } from './Entity';

export const assetZodType = entityZodType.extend({
  image: z.string().url(),
  desciption: z.string().min(15),
  model: z.string().min(1),
  owner: z.string().min(3),
  status: z.enum(['Running', 'Alerting', 'Stopped']),
  health: z.number().min(0).max(100),
});

export type Asset = z.infer<typeof assetZodType>;
