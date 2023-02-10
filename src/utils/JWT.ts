import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import IAuth from '../interfaces/IAuth';

dotenv.config();

export default class JWTauth implements IAuth {
  private TOKEN_SECRET = 'chaveSecreta';

  constructor() {
    this.TOKEN_SECRET = 'chaveSecreta';
  }

  public generateToken(id:number) {
    return jwt.sign({ id }, this.TOKEN_SECRET);
  }
}