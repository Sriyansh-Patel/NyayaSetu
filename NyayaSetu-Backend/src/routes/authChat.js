import { Router } from 'express';
import { aiHandler } from '../middlewares/aiHandler.js';
import {aiLimiter} from '../middlewares/rateLimiter.js';

const router = Router();

router.post('/chat', aiLimiter, aiHandler);

export default router;