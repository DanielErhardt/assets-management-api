import { IModel } from './IModel';

export interface IUnitModel<T> extends IModel<T> {
  /**
   * Adds or removes an asset reference from a unit.
   * @param id The unit's id.
   * @param assetId The asset's id.
   * @param add Adds or removes the asset.
   * @returns The unit with the updated asset list.
   */
  editAssetList(id: string, assetId: string, add: boolean): Promise<T | null>;
}
