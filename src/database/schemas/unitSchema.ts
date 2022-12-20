import { Schema } from 'mongoose';
import { Unit } from '../../@types/Entities';

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
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: [true, 'Unit company field is required .'],
  },
});

export default unitSchema;
