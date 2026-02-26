import { Router } from 'express';
import { reviewController } from '../controllers/reviewController.js';
import { authenticate } from '../middleware/auth.js';

export const reviewRouter = Router();

reviewRouter.post('/', authenticate, reviewController.addReview);
reviewRouter.get('/provider/:providerId', reviewController.listProviderReviews);
