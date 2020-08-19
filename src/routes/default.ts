import { Router } from 'express';
import DefaultController from '../controllers/default';

const router = Router({});

router.get('*', DefaultController.getDefault);

export default router;
