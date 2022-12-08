import { ObjectId, Schema } from 'mongoose';
import { Unit } from '../../@types/Entities';

type SchemaCompatibleUnit = Omit<Unit, 'owner' | 'assets'> & {
  assets: ObjectId[];
  owner: ObjectId;
};

const unitSchema = new Schema<SchemaCompatibleUnit>({
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
