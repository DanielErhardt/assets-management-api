import { Unit as UnitType } from '../@types/Entities';
import { IUnitModel } from '../interfaces/IUnitModel';
import Model from './Model';
import { Unit } from '../database/models';

class UnitModel extends Model<UnitType> implements IUnitModel<UnitType> {
  protected _populate = 'owner assets';

  constructor() {
    super(Unit);
  }

  async editAssetList(id: string, assetId: string, add: boolean): Promise<UnitType | null> {
    const edited = add
      ? await this._model.findByIdAndUpdate(id, {
        $push: { assets: assetId },
      }, { new: true })
      : await this._model.findByIdAndUpdate(id, {
        $pull: { assets: assetId },
      }, { new: true });

    return edited?.toObject() as UnitType;
  }
}

export default UnitModel;
