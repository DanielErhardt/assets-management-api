import {
  sign, verify, SignOptions, JwtPayload,
} from 'jsonwebtoken';
import 'dotenv/config';

class Token {
  private static secret = process.env.JWT_SECRET as string;

  private static options: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '7d', // In a real world application tokens should have a very short expiration.
  };

  /**
   * Creates a new token.
   * @param payload The user information that shoud be saved in the token.
   * @returns A valid token containing the payload.
   */
  public static create(payload: JwtPayload): string {
    return sign(payload, this.secret, this.options);
  }

  /**
   * Checks the token validity.
   * @param token A token string.
   * @returns An object with the payload info encrypted in the token.
   */
  public static validate(token: string): JwtPayload {
    return verify(token, this.secret) as JwtPayload;
  }
}

export default Token;
