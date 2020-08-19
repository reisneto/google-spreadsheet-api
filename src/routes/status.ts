import { Router } from 'express';
import StatusController from '../controllers/status';

const router = Router({});

router.get('/status', StatusController.getStatus);

export default router;
