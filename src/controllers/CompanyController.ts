import { RequestHandler } from 'express';
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

  getEmployees: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    const company = await this._service.findById(id);
    res.status(codes.OK).json(company.employees);
  };

  getAssets: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    const company = await this._service.findById(id);
    res.status(codes.OK).json(company.assets);
  };

  getUnits: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    const company = await this._service.findById(id);
    return res.status(codes.OK).json(company.units);
  };

  addEmployee: RequestHandler = async (req, res) => {
    const { params: { id, employeeId } } = req;
    const company = await this._service.addEmployee(id, employeeId);
    return res.status(codes.OK).json({ employees: company.employees });
  };

  removeEmployee: RequestHandler = async (req, res) => {
    const { params: { id, employeeId } } = req;
    const company = await this._service.removeEmployee(id, employeeId);
    res.status(codes.OK).json({ employees: company.employees });
  };

  addAsset: RequestHandler = async (req, res) => {
    const { params: { id, assetId } } = req;
    const company = await this._service.addAsset(id, assetId);
    res.status(codes.OK).json({ assets: company.assets });
  };

  removeAsset: RequestHandler = async (req, res) => {
    const { params: { id, assetId } } = req;
    const company = await this._service.removeAsset(id, assetId);
    res.status(codes.OK).json({ assets: company.assets });
  };

  addUnit: RequestHandler = async (req, res) => {
    const { params: { id, unitId } } = req;
    const company = await this._service.addUnit(id, unitId);
    return res.status(codes.OK).json({ units: company.units });
  };

  removeUnit: RequestHandler = async (req, res) => {
    const { params: { id, unitId } } = req;
    const company = await this._service.removeUnit(id, unitId);
    res.status(codes.OK).json({ units: company.units });
  };
}

export default CompanyController;
