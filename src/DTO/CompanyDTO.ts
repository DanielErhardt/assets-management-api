import { Company, companyZodType } from '../@types/Company';
import DTO from './DTO';

class CompanyDTO extends DTO<Company> {
  constructor(data: unknown) {
    super(data, companyZodType);
  }
}

export default CompanyDTO;
