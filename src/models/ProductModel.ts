import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/Product';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(name: string, amount: string): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?);';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [name, amount],
    );

    const newProduct = {
      id: insertId,
      name, 
      amount,
    };

    return newProduct;
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const [result] = await this.connection.execute<(IProduct & RowDataPacket)[]>(query);
    return result;
  }
}