import { Request, Response } from 'express';
import codes from 'http-status-codes';
import { AssetStatus } from '../@types/AssetStatus';
import { Asset } from '../@types/Entities';
import AssetService from '../services/AssetService';
import Controller from './Controller';

class AssetController extends Controller<Asset> {
  protected _service: AssetService;

  constructor(service = new AssetService()) {
    super();
    this._service = service;
  }

  async getStatus(req: Request, res: Response) {
    const { params: { id } } = req;
    const status = await this._service.getStatus(id);
    return res.status(codes.OK).json(status);
  }

  async getHealth(req: Request, res: Response) {
    const { params: { id } } = req;
    const health = await this._service.getHealth(id);
    return res.status(codes.OK).json(health);
  }

  async setHealth(req: Request, res: Response) {
    const { params: { id, newHealth } } = req;
    await this._service.setHealth(id, Number(newHealth));
    return res.status(codes.OK).json({ message: `Asset health updated successfully. New health: ${newHealth}` });
  }

  async setStatus(req: Request, res: Response) {
    const { params: { id, newStatus } } = req;
    await this._service.setStatus(id, newStatus as AssetStatus);
    return res.status(codes.OK).json({ message: `Asset status updated successfully. New status: ${newStatus}` });
  }
}

export default AssetController;
