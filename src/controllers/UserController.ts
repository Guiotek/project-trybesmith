import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response, _next: NextFunction) => {
    const { username, vocation, level, password } = req.body;
    const token = await this.service.create(username, vocation, level, password);
    return res.status(201).json({ token });
  };
}