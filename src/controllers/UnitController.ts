import { Unit } from '../@types/Entities';
import UnitService from '../services/UnitService';
import Controller from './Controller';

class UnitController extends Controller<Unit> {
  protected _service: UnitService;

  constructor(service = new UnitService()) {
    super();
    this._service = service;
  }
}

export default UnitController;
