import { User } from '../@types/Entities';
import UserService from '../services/UserService';
import Controller from './Controller';

class UserController extends Controller<User> {
  protected _service: UserService;

  constructor(service = new UserService()) {
    super();
    this._service = service;
  }
}

export default UserController;
