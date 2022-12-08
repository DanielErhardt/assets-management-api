import { Company } from '../@types/Entities';
import CompanyService from '../services/CompanyService';
import Controller from './Controller';

class CompanyController extends Controller<Company> {
  protected _service: CompanyService;

  constructor(service = new CompanyService()) {
    super();
    this._service = service;
  }
}

export default CompanyController;
