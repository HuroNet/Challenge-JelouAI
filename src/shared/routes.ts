import { Express } from 'express';
import contactRoutes from '../modules/contacts/contact.routes';

export function registerRoutes(app: Express) {
  app.use('/contacts', contactRoutes); 
}