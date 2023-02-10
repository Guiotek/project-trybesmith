import { IOrder } from '../interfaces/IOrder';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll():Promise<IOrder[]> {
    const result = await this.model.getAll(); 
    return result;
  }
}