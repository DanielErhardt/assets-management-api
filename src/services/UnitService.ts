import { Unit } from '../@types/Entities';
import UnitModel from '../database/models/UnitModel';
import RequestError from '../utils/RequestError';
import Service from './Service';

class UnitService extends Service<Unit> {
  protected _model: UnitModel;

  constructor(model = new UnitModel()) {
    super();
    this._model = model;
  }

  async addAsset(id: string, assetId: string): Promise<Unit> {
    const unit = await this._model.editAssetList(id, assetId, true);
    if (!unit) throw RequestError.badRequest(`Unit with id ${id} not found.`);
    return unit;
  }

  async removeAsset(id: string, assetId: string): Promise<Unit> {
    const unit = await this._model.editAssetList(id, assetId, false);
    if (!unit) throw RequestError.badRequest(`Unit with id ${id} not found.`);
    return unit;
  }
}

export default UnitService;
