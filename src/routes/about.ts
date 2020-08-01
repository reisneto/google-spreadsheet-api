import { Router } from 'express';
import AboutController from '../controllers/about';

const router = Router({});

router.get('/status', AboutController.getStatus);

export default router;
