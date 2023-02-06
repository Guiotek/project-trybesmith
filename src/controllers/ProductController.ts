import { NextFunction, Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const { name, amount } = req.body;
    const newProduct = await this.service.create(name, amount);
    return res.status(201).json(newProduct);
  };
}