import { Router } from 'express';
import apiRouter from './services/search'

const router = Router();

router.use('/api', apiRouter);

export default router;