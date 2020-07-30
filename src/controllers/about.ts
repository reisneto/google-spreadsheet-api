import { Request, Response } from 'express';

class AboutController {
  static getStatus(req: Request, res: Response): Response {
    return res.status(200).json({ online: true });
  }
}

export default AboutController;
