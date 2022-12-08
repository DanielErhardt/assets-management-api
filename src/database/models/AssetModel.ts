import { Asset } from '../../@types/Entities';
import assetSchema from '../schemas/assetSchema';
import Model from './Model';

class AssetModel extends Model<Asset> {
  protected _populate = '';

  constructor() {
    super('Asset', assetSchema);
  }
}

export default AssetModel;
