import { Schema } from 'mongoose';
import { Archive } from '../../@types/Entities';

const archiveSchema = new Schema<Archive>({
  collectionName: {
    type: String,
    required: [true, 'Archive origin field is required.'],
  },
  document: {
    type: Schema.Types.Mixed,
    required: [true, 'Archive document field is required.'],
  },
  archivedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default archiveSchema;
