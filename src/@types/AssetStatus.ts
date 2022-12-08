import { z } from 'zod';
import { assetStatusZodType } from './ZodTypes';

export type AssetStatus = z.infer<typeof assetStatusZodType>;
