import { ObjectId, Schema } from 'mongoose';
import { Asset } from '../../@types/Entities/Asset';

type SchemaCompatibleAsset = Omit<Asset, 'owner'> & {
  owner: ObjectId;
};

const assetSchema = new Schema<SchemaCompatibleAsset>({
  name: {
    type: String,
    require: [true, 'Asset name field is required.'],
  },
  image: {
    type: String,
    required: [true, 'Asset image URL is required.'],
  },
  description: {
    type: String,
    required: [true, 'Asset description field is required.'],
    minlength: [10, 'Asset description too short. Please, provide more details.'],
  },
  model: {
    type: String,
    required: [true, 'Asset model field is required.'],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: [true, 'Asset owner field is required.'],
  },
  status: {
    type: String,
    enum: ['Running', 'Alerting', 'Stopped'],
    required: [true, 'Asset status field is required.'],
  },
  health: {
    type: Number,
    required: [true, 'Asset health field is required.'],
    min: [0, 'Asset health level cannot be lower than 0. Got {VALUE}.'],
    max: [100, 'Asset health level cannot be higher than 100. Got {VALUE}.'],
  },
});

export default assetSchema;
