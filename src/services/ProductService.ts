import connection from '../models/connection';
import ProductModel from '../models/ProductModel';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (name:string, amount: string) => {
    const result = await this.model.create(name, amount);
    return result;
  };
}