import { IModel } from './IModel';

export interface ICompanyModel<T> extends IModel<T> {
  /**
   * Adds or removes an employee reference from a company.
   * @param id The Company's id.
   * @param employeeId The employee's id.
   * @param add Adds or removes the employee.
   * @returns The company with the updated list.
   */
  editEmployeeList(id: string, employeeId: string, add: boolean): Promise<T | null>;

  /**
   * Adds or removes an asset reference from a company.
   * @param id The Company's id.
   * @param assetId The asset's id.
   * @param add Adds or removes the asset.
   * @returns The company with the updated list.
   */
  editAssetList(id: string, assetId: string, add: boolean): Promise<T | null>;

  /**
   * Adds or removes an unit reference from a company.
   * @param id The Company's id.
   * @param unitId The unit's id.
   * @param add Adds or removes the unit.
   * @returns The company with the updated list.
   */
  editUnitList(id: string, unitId: string, add: boolean): Promise<T | null>
}
