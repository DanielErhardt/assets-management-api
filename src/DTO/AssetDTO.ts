import { Asset, assetZodType } from '../@types/Asset';
import DTO from './DTO';

class AssetDTO extends DTO<Asset> {
  constructor(data: unknown) {
    super(data, assetZodType);
  }
}

export default AssetDTO;
