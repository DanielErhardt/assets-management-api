import { User } from '../@types/Entities';
import UserModel from '../database/models/UserModel';
import Service from './Service';

class UserService extends Service<User> {
  protected _model: UserModel;

  constructor(model = new UserModel()) {
    super();
    this._model = model;
  }
}

export default UserService;
