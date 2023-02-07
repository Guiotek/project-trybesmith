import connection from '../models/connection';
import UserModel from '../models/UserModel';
import JWTauth from '../utils/JWT';

export default class UserService {
  public model: UserModel;
  
  public auth: JWTauth;

  constructor() {
    this.model = new UserModel(connection);
    this.auth = new JWTauth();
  }

  public create = async (username:string, vocation:string, level:number, password:string) => {
    const result = await this.model.create(username, vocation, level, password);
    const token = await this.auth.generateToken(result);
    return token;
  };
}