import { ContactRepository } from './contact.repository';

export const ContactService = {
  getAllContacts: async () => {
    return await ContactRepository.getAll();
  },

  getContactById: async (id: string) => {
    const contact = await ContactRepository.getById(id);
    if (!contact) throw new Error('Contact not found');
    return contact;
  },

  createContact: async (data: {
    name: string;
    email: string;
    phone?: string;
    contactType: string;
  }) => {
    return await ContactRepository.create(data);
  },

  deleteContact: async (id: string) => {
    return await ContactRepository.delete(id);
  }
};