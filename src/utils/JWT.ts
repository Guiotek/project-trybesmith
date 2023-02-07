import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import IAuth from '../interfaces/IAuth';

dotenv.config();

// const TOKEN_SECRET = process.env.JWT_SECRET;

// const generateToken = ( id, email, displayName, image ) => {
//   jwt.sign({ id, email, displayName, image }, TOKEN_SECRET);
// };

// const validateToken = async (token:) => {
//   if (!token) {
//     const error = new Error('Token not found');
//     error.status = 401;
//     throw error;
//   }

//   try {
//     const decryptedData = await jwt.verify(token, TOKEN_SECRET);
//     return decryptedData;
//   } catch (err) {
//     const error = new Error('Expired or invalid token');
//     error.status = 401;
//     throw error;
//   }
// };

// export default {
//   validateToken,
//   generateToken,
// };

export default class JWTauth implements IAuth {
  private TOKEN_SECRET = 'chaveSecreta';

  constructor() {
    this.TOKEN_SECRET = 'chaveSecreta';
  }

  public generateToken(id:number) {
    return jwt.sign({ id }, this.TOKEN_SECRET);
  }
}