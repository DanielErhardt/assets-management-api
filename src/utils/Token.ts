import {
  sign, verify, SignOptions, JwtPayload,
} from 'jsonwebtoken';

class Token {
  private static secret = process.env.JWT_SECRET as string;

  private static options: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '7d', // Long expiration for example project only
  };

  public static create(payload: JwtPayload): string {
    return sign(payload, this.secret, this.options);
  }

  public static validate(token: string): JwtPayload {
    return verify(token, this.secret) as JwtPayload;
  }
}

export default Token;
