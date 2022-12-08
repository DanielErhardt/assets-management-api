import { RequestHandler } from 'express';
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

  login: RequestHandler = async (req, res) => {
    const { body } = req;
    const token = await this._service.login(body as Credentials);
    res.status(codes.OK).json({ token });
  };

  assignRole: RequestHandler = async (req, res) => {
    const { params: { id, newRole } } = req;
    const user = await this._service.assignRole(id, newRole as UserRole);
    res.status(codes.OK).json({ message: `Successfully assigned role ${newRole} to ${user.name}` });
  };
}

export default UserController;
