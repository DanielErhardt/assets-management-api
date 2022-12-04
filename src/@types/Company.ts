import { z } from 'zod';
import { entityZodType } from './Entity';

export const companyZodType = entityZodType.extend({

});

export type Company = z.infer<typeof companyZodType>;
