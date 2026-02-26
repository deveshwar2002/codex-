import { Router } from 'express';
import { adminController } from '../controllers/adminController.js';
import { authenticate, authorize } from '../middleware/auth.js';

export const adminRouter = Router();

adminRouter.get('/dashboard', authenticate, authorize('admin'), adminController.dashboard);
