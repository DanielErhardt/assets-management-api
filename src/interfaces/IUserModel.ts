import { IModel } from './IModel';

export interface IUserModel<T> extends IModel<T> {
  /**
   * Finds a user by their email adress
   * @param email The user's email.
   * @param login If true, retrieves the password from the database for authentication.
   * @returns The user that owns the email.
   */
  findByEmail(email:string, login: boolean): Promise<T | null>
}
