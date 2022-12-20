import { Asset as AssetType } from '../@types/Entities';
import { IAssetModel } from '../interfaces/IAssetModel';
import Model from './Model';
import { Asset } from '../database/models';

class AssetModel extends Model<AssetType> implements IAssetModel<AssetType> {
  protected _populate = 'owner';

  constructor() {
    super(Asset);
  }
}

export default AssetModel;
