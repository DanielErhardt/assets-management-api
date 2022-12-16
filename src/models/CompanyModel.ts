import { Company } from '../@types/Entities';
import { ICompanyModel } from '../interfaces/ICompanyModel';
import companySchema from '../database/schemas/companySchema';
import Model from './Model';

class CompanyModel extends Model<Company> implements ICompanyModel<Company> {
  protected _populate = 'employees assets units';

  constructor() {
    super('Company', companySchema);
  }

  async editEmployeeList(id: string, employeeId: string, add: boolean): Promise<Company | null> {
    const edited = add
      ? await this._model.findByIdAndUpdate(id, {
        $push: { employees: employeeId },
      }, { new: true })
      : await this._model.findByIdAndUpdate(id, {
        $pull: { employees: employeeId },
      }, { new: true });

    return edited?.toObject() as Company;
  }

  async editAssetList(id: string, assetId: string, add: boolean): Promise<Company | null> {
    const edited = add
      ? await this._model.findByIdAndUpdate(id, {
        $push: { assets: assetId },
      }, { new: true })
      : await this._model.findByIdAndUpdate(id, {
        $pull: { assets: assetId },
      }, { new: true });

    return edited?.toObject() as Company;
  }

  async editUnitList(id: string, unitId: string, add: boolean): Promise<Company | null> {
    const edited = add
      ? await this._model.findByIdAndUpdate(id, {
        $push: { units: unitId },
      }, { new: true })
      : await this._model.findByIdAndUpdate(id, {
        $pull: { units: unitId },
      }, { new: true });

    return edited?.toObject() as Company;
  }
}

export default CompanyModel;
