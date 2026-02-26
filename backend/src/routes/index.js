import { Router } from 'express';
import { authRouter } from './authRoutes.js';
import { serviceRouter } from './serviceRoutes.js';
import { bookingRouter } from './bookingRoutes.js';
import { paymentRouter } from './paymentRoutes.js';
import { reviewRouter } from './reviewRoutes.js';
import { adminRouter } from './adminRoutes.js';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/services', serviceRouter);
apiRouter.use('/bookings', bookingRouter);
apiRouter.use('/payments', paymentRouter);
apiRouter.use('/reviews', reviewRouter);
apiRouter.use('/admin', adminRouter);
