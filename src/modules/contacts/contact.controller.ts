import { Request, Response } from 'express';
import { ContactService } from './contacts.service';

export const ContactController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const contacts = await ContactService.getAllContacts();
      res.json(contacts);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const contact = await ContactService.getContactById(req.params.id);
      if (!contact) throw new Error('Contact not found');
      res.json(contact);
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const newContact = await ContactService.createContact(req.body);
      res.status(201).json(newContact);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await ContactService.deleteContact(req.params.id);
      res.status(204).send();
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  }
};