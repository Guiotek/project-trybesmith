import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll() {
    const query = `select o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as
    productsIds from Trybesmith.orders as o inner join Trybesmith.products as p on p.order_id = o.id
    group by o.id order by o.id`;
    const [result] = await this.connection.execute<(IOrder & RowDataPacket[])[]>(query);
    return result;
  }
}