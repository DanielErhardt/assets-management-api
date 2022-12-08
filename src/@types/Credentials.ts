import { z } from 'zod';
import { credentialsZodType } from './ZodTypes';

export type Credentials = z.infer<typeof credentialsZodType>;
