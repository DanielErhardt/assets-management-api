import { Request, Response } from 'express';
import codes from 'http-status-codes';
import { Company } from '../@types/Entities';
import CompanyService from '../services/CompanyService';
import Controller from './Controller';

class CompanyController extends Controller<Company> {
  protected _service: CompanyService;

  constructor(service = new CompanyService()) {
    super();
    this._service = service;
  }

  async getEmployees(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const company = await this._service.findById(id);
    return res.status(codes.OK).json(company.employees);
  }

  async getAssets(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const company = await this._service.findById(id);
    return res.status(codes.OK).json(company.assets);
  }

  async getUnits(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const company = await this._service.findById(id);
    return res.status(codes.OK).json(company.units);
  }

  async addEmployee(req: Request, res: Response): Promise<Response> {
    const { params: { id, employeeId } } = req;
    const company = await this._service.addEmployee(id, employeeId);
    return res.status(codes.OK).json({ employees: company.employees });
  }

  async removeEmployee(req: Request, res: Response): Promise<Response> {
    const { params: { id, employeeId } } = req;
    const company = await this._service.removeEmployee(id, employeeId);
    return res.status(codes.OK).json({ employees: company.employees });
  }

  async addAsset(req: Request, res: Response): Promise<Response> {
    const { params: { id, assetId } } = req;
    const company = await this._service.addAsset(id, assetId);
    return res.status(codes.OK).json({ assets: company.assets });
  }

  async removeAsset(req: Request, res: Response): Promise<Response> {
    const { params: { id, assetId } } = req;
    const company = await this._service.removeAsset(id, assetId);
    return res.status(codes.OK).json({ assets: company.assets });
  }

  async addUnit(req: Request, res: Response): Promise<Response> {
    const { params: { id, unitId } } = req;
    const company = await this._service.addUnit(id, unitId);
    return res.status(codes.OK).json({ units: company.units });
  }

  async removeUnit(req: Request, res: Response): Promise<Response> {
    const { params: { id, unitId } } = req;
    const company = await this._service.removeUnit(id, unitId);
    return res.status(codes.OK).json({ units: company.units });
  }
}

export default CompanyController;
