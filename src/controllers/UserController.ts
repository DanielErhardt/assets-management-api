import { Request, Response } from 'express';
import codes from 'http-status-codes';
import { Credentials } from '../@types/Credentials';
import { User } from '../@types/Entities';
import { UserRole } from '../@types/UserRole';
import UserService from '../services/UserService';
import Controller from './Controller';

class UserController extends Controller<User> {
  protected _service: UserService;

  constructor(service = new UserService()) {
    super();
    this._service = service;
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const token = await this._service.login(body as Credentials);
    return res.status(codes.OK).json({ token });
  }

  async assignRole(req: Request, res: Response): Promise<Response> {
    const { params: { id, newRole } } = req;
    const user = await this._service.assignRole(id, newRole as UserRole);
    return res.status(codes.OK).json({ message: `Successfully assigned role ${newRole} to ${user.name}` });
  }
}

export default UserController;
