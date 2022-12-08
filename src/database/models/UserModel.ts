import { User } from '../../@types/Entities';
import userSchema from '../schemas/userSchema';
import Model from './Model';

class UserModel extends Model<User> {
  protected _populate = '';
  constructor() {
    super('User', userSchema);
  }
}

export default UserModel;
