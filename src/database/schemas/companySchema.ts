import { Schema } from 'mongoose';
import { Company } from '../../@types/Company';

const companySchema = new Schema<Company>({
  name: {
    type: String,
    required: [true, 'Company name field is required.'],
    unique: true,
  },
}, { toObject: { getters: true } });

export default companySchema;
