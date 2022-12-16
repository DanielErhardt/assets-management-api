import { model } from 'mongoose';
import archiveSchema from '../schemas/archiveSchema';
import assetSchema from '../schemas/assetSchema';
import companySchema from '../schemas/companySchema';
import unitSchema from '../schemas/unitSchema';
import userSchema from '../schemas/userSchema';

export const User = model('User', userSchema);
export const Asset = model('Asset', assetSchema);
export const Company = model('Company', companySchema);
export const Unit = model('Unit', unitSchema);
export const Archive = model('Archive', archiveSchema);
