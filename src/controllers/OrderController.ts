import { NextFunction, Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  public service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response, _next: NextFunction) => {
    const allOrders = await this.service.getAll();
    return res.status(200).json(allOrders);
  };
}