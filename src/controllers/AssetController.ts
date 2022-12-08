import { Request, Response } from 'express';
import codes from 'http-status-codes';
import { Asset } from '../@types/Entities';
import AssetService from '../services/AssetService';
import Controller from './Controller';

class AssetController extends Controller<Asset> {
  protected _service: AssetService;

  constructor(service = new AssetService()) {
    super();
    this._service = service;
  }
}

export default AssetController;
