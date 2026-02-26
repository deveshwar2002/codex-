import { Router } from 'express';
import { serviceController } from '../controllers/serviceController.js';

export const serviceRouter = Router();

serviceRouter.get('/categories', serviceController.listCategories);
serviceRouter.get('/discover', serviceController.discoverNearbyProfessionals);
