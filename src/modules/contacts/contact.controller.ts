import { Request, Response } from 'express';
import { ContactService } from './contacts.service';

export const ContactController = {
  getAll: async (req: Request, res: Response) => {
    const contacts = await ContactService.getAllContacts();
    res.json(contacts);
  },

  getById: async (req: Request, res: Response) => {
    try {
      const contact = await ContactService.getContactById(req.params.id);
      res.json(contact);
    } catch (err) {
        console.log(err)
      res.status(404).json({ message: 'Contact not found' }); // ← Responde a pregunta 3
    }
  },

  create: async (req: Request, res: Response) => {
    const newContact = await ContactService.createContact(req.body);
    res.status(201).json(newContact); // ← Responde a pregunta 1 (POST)
  },

  delete: async (req: Request, res: Response) => {
    try {
      await ContactService.deleteContact(req.params.id);
      res.status(204).send();
    } catch (err) {
        console.log(err);
      res.status(404).json({ message: 'Contact not found' });
    }
  }
};