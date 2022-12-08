import { Company } from '../@types/Entities';
import CompanyModel from '../database/models/CompanyModel';
import RequestError from '../utils/RequestError';
import Service from './Service';

class CompanyService extends Service<Company> {
  protected _model: CompanyModel;

  constructor(model = new CompanyModel()) {
    super();
    this._model = model;
  }

  async addEmployee(id: string, employeeId: string): Promise<Company> {
    const company = await this._model.editEmployeeList(id, employeeId, true);
    if (!company) throw RequestError.badRequest(`Company with id ${id} not found.`);
    return company;
  }

  async removeEmployee(id: string, employeeId: string): Promise<Company> {
    const company = await this._model.editEmployeeList(id, employeeId, false);
    if (!company) throw RequestError.badRequest(`Company with id ${id} not found.`);
    return company;
  }

  async addAsset(id: string, assetId: string): Promise<Company> {
    const company = await this._model.editAssetList(id, assetId, true);
    if (!company) throw RequestError.badRequest(`Company with id ${id} not found.`);
    return company;
  }

  async removeAsset(id: string, assetId: string): Promise<Company> {
    const company = await this._model.editAssetList(id, assetId, false);
    if (!company) throw RequestError.badRequest(`Company with id ${id} not found.`);
    return company;
  }

  async addUnit(id: string, unitId: string): Promise<Company> {
    const company = await this._model.editUnitList(id, unitId, true);
    if (!company) throw RequestError.badRequest(`Company with id ${id} not found.`);
    return company;
  }

  async removeUnit(id: string, unitId: string): Promise<Company> {
    const company = await this._model.editUnitList(id, unitId, false);
    if (!company) throw RequestError.badRequest(`Company with id ${id} not found.`);
    return company;
  }
}

export default CompanyService;
