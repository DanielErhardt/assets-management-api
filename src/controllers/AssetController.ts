import { RequestHandler } from 'express';
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

  getStatus: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    const status = await this._service.getStatus(id);
    res.status(codes.OK).json({ status });
  };

  getHealth: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    const health = await this._service.getHealth(id);
    res.status(codes.OK).json({ health });
  };

  setHealth: RequestHandler = async (req, res) => {
    const { params: { id, newHealth } } = req;
    await this._service.setHealth(id, Number(newHealth));
    res.status(codes.OK).json({ message: `Asset health updated successfully. New health: ${newHealth}` });
  };

  setStatus: RequestHandler = async (req, res) => {
    const { params: { id, newStatus } } = req;
    await this._service.setStatus(id, newStatus as AssetStatus);
    res.status(codes.OK).json({ message: `Asset status updated successfully. New status: ${newStatus}` });
  };
}

export default AssetController;
