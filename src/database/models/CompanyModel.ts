import { Company } from '../../@types/Entities';
import companySchema from '../schemas/companySchema';
import Model from './Model';

class CompanyModel extends Model<Company> {
  protected _populate = '';

  constructor() {
    super('Company', companySchema);
  }
}

export default CompanyModel;
