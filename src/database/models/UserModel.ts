import { User } from '../../@types/Entities';
import userSchema from '../schemas/userSchema';
import Model from './Model';

class UserModel extends Model<User> {
  protected _populate = '';
  constructor() {
    super('User', userSchema);
  }

  // Override for deleting the user password.
  async createOne(user: User): Promise<User> {
    const created = await (await this._model.create(user)).toObject();
    delete created.password;
    return created as User;
  }

  /**
   * Finds a user with matching email in the database.
   * @param email The user's email.
   * @returns The user with the passed email. Null if no user found.
   */
  async findByEmail(email: string): Promise<User | null> {
    const found = await this._model.findOne({ email })
      .populate(this._populate)
      .select('__v');

    return found as User | null;
  }
}

export default UserModel;
