import { Unit, unitZodType } from '../@types/Unit';
import DTO from './DTO';

class UnitDTO extends DTO<Unit> {
  constructor(data: unknown) {
    super(data, unitZodType);
  }
}

export default UnitDTO;
