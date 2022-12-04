import { z } from 'zod';
import { entityZodType } from './Entity';
import { assetZodType } from './Asset';

export const unitZodType = entityZodType.extend({
  assets: z.array(assetZodType).optional(),
  companyId: z.string(),
});

export type Unit = z.infer<typeof unitZodType>;
