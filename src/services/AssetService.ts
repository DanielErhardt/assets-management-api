
import { Asset } from '../@types/Entities';
import AssetModel from '../database/models/AssetModel';
import Service from './Service';

class AssetService extends Service<Asset> {
  protected _model: AssetModel;

  constructor(model = new AssetModel()) {
    super();
    this._model = model;
  }
}

export default AssetService;
