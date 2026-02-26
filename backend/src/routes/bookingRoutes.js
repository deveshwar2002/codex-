import { Router } from 'express';
import { bookingController } from '../controllers/bookingController.js';
import { authenticate } from '../middleware/auth.js';

export const bookingRouter = Router();

bookingRouter.get('/availability', authenticate, bookingController.checkAvailability);
bookingRouter.post('/', authenticate, bookingController.createBooking);
bookingRouter.patch('/:bookingId/status', authenticate, bookingController.updateBookingStatus);
