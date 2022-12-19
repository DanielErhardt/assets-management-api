import { Company as CompanyType } from '../@types/Entities';
import { Company } from '../database/models';
import { ICompanyModel } from '../interfaces/ICompanyModel';
import Model from './Model';

class CompanyModel extends Model<CompanyType> implements ICompanyModel<CompanyType> {
  protected _populate = 'employees assets units';

  constructor() {
    super(Company);
  }

  async editEmployeeList(id: string, employeeId: string, add: boolean): Promise<CompanyType | null> {
    const edited = add
      ? await this._model.findByIdAndUpdate(id, {
        $push: { employees: employeeId },
      }, { new: true })
      : await this._model.findByIdAndUpdate(id, {
        $pull: { employees: employeeId },
      }, { new: true });

    return edited?.toObject() as CompanyType;
  }

  async editAssetList(id: string, assetId: string, add: boolean): Promise<CompanyType | null> {
    const edited = add
      ? await this._model.findByIdAndUpdate(id, {
        $push: { assets: assetId },
      }, { new: true })
      : await this._model.findByIdAndUpdate(id, {
        $pull: { assets: assetId },
      }, { new: true });

    return edited?.toObject() as CompanyType;
  }

  async editUnitList(id: string, unitId: string, add: boolean): Promise<CompanyType | null> {
    const edited = add
      ? await this._model.findByIdAndUpdate(id, {
        $push: { units: unitId },
      }, { new: true })
      : await this._model.findByIdAndUpdate(id, {
        $pull: { units: unitId },
      }, { new: true });

    return edited?.toObject() as CompanyType;
  }
}

export default CompanyModel;
