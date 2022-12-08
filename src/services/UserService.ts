import { Credentials } from '../@types/Credentials';
import { User } from '../@types/Entities';
import { UserRole } from '../@types/UserRole';
import UserModel from '../database/models/UserModel';
import BCrypt from '../utils/BCrypt';
import RequestError from '../utils/RequestError';
import Token from '../utils/Token';
import Service from './Service';

class UserService extends Service<User> {
  protected _model: UserModel;

  constructor(model = new UserModel()) {
    super();
    this._model = model;
  }

  // Override for checking duplicate email and encrypting password.
  async createOne(user: User): Promise<User> {
    const { email, password } = user;
    if (!password) throw RequestError.badRequest('Password cannot be undefined or empty');

    const found = await this._model.findByEmail(email);
    if (found) throw RequestError.conflict('Email is already registered.');

    const hash = BCrypt.encrypt(password);

    const created = await this._model.createOne({
      ...user,
      password: hash,
    });

    return created;
  }

  async login(credentials: Credentials): Promise<string> {
    const { password, email } = credentials;

    const user = await this._model.findByEmail(email);
    if (!user) throw RequestError.notFound(`User with email ${credentials.email} not found.`);

    const { password: hash } = user;

    if (!BCrypt.validate(password, hash as string)) {
      throw RequestError.unauthorized('Invalid password');
    }

    return Token.create(user);
  }

  async assignRole(id: string, role: UserRole): Promise<User> {
    const user = await this._model.updateOne(id, { role });
    if (!user) throw RequestError.notFound(`User with id ${id} not found.`);
    return user;
  }
}

export default UserService;
