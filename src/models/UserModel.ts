import { Pool, ResultSetHeader } from 'mysql2/promise';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(username:string, vocation:string, level:number, password:string) {
    const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      query,
      [username, vocation, level, password],
    );
    return insertId;
  }
}