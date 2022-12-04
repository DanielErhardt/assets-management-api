import { z } from 'zod';

export const entityZodType = z.object({
  _id: z.string().optional(),
  name: z.string().min(3),
});

export type Entity = z.infer<typeof entityZodType>;
