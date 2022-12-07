import { z } from 'zod';
import { entityZodType } from './Entity';

export const archiveZodType = entityZodType.extend({
  collectionName: z.string(),
  document: z.record(z.string(), z.any()),
  archivedAt: z.date().optional(),
}).strict();

export type Archive = z.infer<typeof archiveZodType>;
