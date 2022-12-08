import { Company } from '../@types/Entities';
import CompanyModel from '../database/models/CompanyModel';
import Service from './Service';

class CompanyService extends Service<Company> {
  protected _model: CompanyModel;

  constructor(model = new CompanyModel()) {
    super();
    this._model = model;
  }
}

export default CompanyService;
