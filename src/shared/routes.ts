import { Express } from 'express';
import contactRoutes from '../modules/contacts/contact.routes';
import orderRoutes from '../modules/orders/order.routes';

export function registerRoutes(app: Express) {
  app.use('/contacts', contactRoutes);
  app.use('/orders', orderRoutes); 
}