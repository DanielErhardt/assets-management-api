import { User as UserType } from '../@types/Entities';
import { IUserModel } from '../interfaces/IUserModel';
import Model from './Model';
import { User } from '../database/models';

class UserModel extends Model<UserType> implements IUserModel<UserType> {
  protected _populate = 'company';
  constructor() {
    super(User);
  }

  // Override for deleting the user password.
  async createOne(user: UserType): Promise<UserType> {
    const created = await (await this._model.create(user)).toObject();
    delete created.password;
    return created as UserType;
  }

  /**
   * Finds a user with matching email in the database.
   * @param email The user's email.
   * @returns The user with the passed email. Null if no user found.
   */
  async findByEmail(email: string, login = false): Promise<UserType | null> {
    const select = login ? '+password' : '';
    const found = await this._model.findOne({ email })
      .populate(this._populate)
      .select(select);

    return found as UserType | null;
  }
}

export default UserModel;
