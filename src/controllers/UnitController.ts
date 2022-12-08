import { Request, Response } from 'express';
import codes from 'http-status-codes';
import { Unit } from '../@types/Entities';
import UnitService from '../services/UnitService';
import Controller from './Controller';

class UnitController extends Controller<Unit> {
  protected _service: UnitService;

  constructor(service = new UnitService()) {
    super();
    this._service = service;
  }

  async addAsset(req: Request, res: Response): Promise<Response> {
    const { params: { id, assetId } } = req;
    const unit = await this._service.addAsset(id, assetId);
    return res.status(codes.OK).json({ assets: unit.assets });
  }

  async removeAsset(req: Request, res: Response): Promise<Response> {
    const { params: { id, assetId } } = req;
    const unit = await this._service.removeAsset(id, assetId);
    return res.status(codes.OK).json({ assets: unit.assets });
  }
}

export default UnitController;
