import { User } from '../@types/Entities';
import { IUserModel } from '../interfaces/IUserModel';
import userSchema from '../database/schemas/userSchema';
import Model from './Model';

class UserModel extends Model<User> implements IUserModel<User> {
  protected _populate = 'company';
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
  async findByEmail(email: string, login = false): Promise<User | null> {
    const select = login ? '+password' : '';
    const found = await this._model.findOne({ email })
      .populate(this._populate)
      .select(select);

    return found as User | null;
  }
}

export default UserModel;
