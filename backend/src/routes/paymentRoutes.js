import { Router } from 'express';
import { paymentController } from '../controllers/paymentController.js';
import { authenticate } from '../middleware/auth.js';

export const paymentRouter = Router();

paymentRouter.post('/intent', authenticate, paymentController.createPaymentIntent);
paymentRouter.post('/verify', authenticate, paymentController.verifyPayment);
paymentRouter.get('/history', authenticate, paymentController.listPaymentHistory);
