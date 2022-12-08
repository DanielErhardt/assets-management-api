import { Unit } from '../../@types/Entities';
import unitSchema from '../schemas/unitSchema';
import Model from './Model';

class UnitModel extends Model<Unit> {
  protected _populate = '';

  constructor() {
    super('Unit', unitSchema);
  }
}

export default UnitModel;
