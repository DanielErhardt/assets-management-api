import { hashSync, compareSync } from 'bcryptjs';

class BCrypt {
  private static salt = 10;

  /**
   * Creates an encrypted hash from the password.
   * @param password The plain user password.
   * @returns A hash containing the encrypted password.
   */
  public static encrypt(password: string): string {
    return hashSync(password, this.salt);
  }

  /**
   * Compares a password with it's encrypted hash.
   * @param password The user plain password.
   * @param hash The password hash stored in the database.
   * @returns True if the password matches the hash. False otherwise.
   */
  public static validate(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}

export default BCrypt;
