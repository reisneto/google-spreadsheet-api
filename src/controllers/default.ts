import { Request, Response } from 'express';

class DefaultController {
  static getDefault(req: Request, res: Response): Response {
    return res.status(404).json({ error: 'endpoint not found' });
  }
}

export default DefaultController;
