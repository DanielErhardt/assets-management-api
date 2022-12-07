import { z } from 'zod';

export const entityZodType = z.object({
  _id: z.string().optional(),
});

export type Entity = z.infer<typeof entityZodType>;
