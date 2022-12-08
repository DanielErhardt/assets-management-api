import { z } from 'zod';
import { userRoleZodType } from './ZodTypes';

export type UserRole = z.infer<typeof userRoleZodType>;
