import { AssetStatus } from '../@types/AssetStatus';
import { Asset } from '../@types/Entities';
import AssetModel from '../models/AssetModel';
import Service from './Service';

class AssetService extends Service<Asset> {
  protected _model: AssetModel;

  constructor(model = new AssetModel()) {
    super();
    this._model = model;
  }

  async getStatus(id: string): Promise<string> {
    const asset = await this.findById(id);
    return asset.status;
  }

  async getHealth(id: string): Promise<number> {
    const asset = await this.findById(id);
    return asset.health;
  }

  async setStatus(id: string, status: AssetStatus): Promise<void> {
    await this.updateOne(id, { status });
  }

  async setHealth(id: string, health: number): Promise<void> {
    await this.updateOne(id, { health });
  }
}

export default AssetService;
