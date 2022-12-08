import { Unit } from '../../@types/Entities';
import unitSchema from '../schemas/unitSchema';
import Model from './Model';

class UnitModel extends Model<Unit> {
  protected _populate = '';

  constructor() {
    super('Unit', unitSchema);
  }

  async editAssetList(id: string, assetId: string, add: boolean): Promise<Unit | null> {
    const edited = add
      ? await this._model.findByIdAndUpdate(id, {
        $push: { assets: assetId },
      }, { new: true })
      : await this._model.findByIdAndUpdate(id, {
        $pull: { assets: assetId },
      }, { new: true });

    return edited?.toObject() as Unit;
  }
}

export default UnitModel;
