import { Schema } from 'mongoose';
import { Unit } from '../../@types/Entities/Unit';

const unitSchema = new Schema<Unit>({
  name: {
    type: String,
    required: [true, 'Unit name field is required.'],
  },
  assets: [{
    type: Schema.Types.ObjectId,
    ref: 'Asset',
    required: [true, 'Unit assets field is required.'],
  }],
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: [true, 'Unit companyId field is required .'],
  },
}, { toObject: { getters: true } });

export default unitSchema;
