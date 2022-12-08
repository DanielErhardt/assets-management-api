import { ObjectId, Schema } from 'mongoose';
import { Company } from '../../@types/Entities';

type SchemaCompatibleCompany = Omit<Company, 'assets' | 'employees' | 'units'> & {
  assets: ObjectId[];
  employees: ObjectId[];
  units: ObjectId[];
};

const companySchema = new Schema<SchemaCompatibleCompany>({
  name: {
    type: String,
    required: [true, 'Company name field is required.'],
    unique: true,
  },
  assets: [{
    type: Schema.Types.ObjectId,
    ref: 'Asset',
    required: [true, 'Company assets field is required .'],
  }],
  employees: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Company employees field is required .'],
  }],
  units: [{
    type: Schema.Types.ObjectId,
    ref: 'Unit',
    required: [true, 'Company units field is required .'],
  }],
});

export default companySchema;
