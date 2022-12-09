import { Asset } from '../../@types/Entities';
import { IAssetModel } from '../../interfaces/IAssetModel';
import assetSchema from '../schemas/assetSchema';
import Model from './Model';

class AssetModel extends Model<Asset> implements IAssetModel<Asset> {
  protected _populate = 'owner';

  constructor() {
    super('Asset', assetSchema);
  }
}

export default AssetModel;
