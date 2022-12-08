import { Unit } from '../@types/Entities';
import UnitModel from '../database/models/UnitModel';
import Service from './Service';

class UnitService extends Service<Unit> {
  protected _model: UnitModel;

  constructor(model = new UnitModel()) {
    super();
    this._model = model;
  }
}

export default UnitService;
