import { z } from 'zod';
import { entityZodType } from './Entity';

export const unitZodType = entityZodType.extend({
  name: z.string(),
  assets: z.array(z.string()),
  owner: z.string(),
}).strict();

export type Unit = z.infer<typeof unitZodType>;
