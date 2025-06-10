import { PrismaClient } from '@prisma/client';
import { ErrorHandler } from '../../shared/error.handler';

const prisma = new PrismaClient();
const errorHandler = new ErrorHandler();

export const ContactRepository = {
  async getAll() {
    try {
      return await prisma.contact.findMany();
    } catch (error: any) {
      errorHandler.addError(`Error fetching contacts: ${error.message}`);
      throw new Error(errorHandler.getErrors().join('; '));
    }
  },

  async getById(id: string) {
    try {
      return await prisma.contact.findUnique({ where: { id } });
    } catch (error: any) {
      errorHandler.addError(`Error fetching contact with ID ${id}: ${error.message}`);
      throw new Error(errorHandler.getErrors().join('; '));
    }
  },

  async create(data: {
    name: string;
    email: string;
    phone?: string;
    contactType: string;
  }) {
    try {
      return await prisma.contact.create({ data });
    } catch (error: any) {
      errorHandler.addError(`Error creating contact: ${error.message}`);
      throw new Error(errorHandler.getErrors().join('; '));
    }
  },

  async delete(id: string) {
    try {
      return await prisma.contact.delete({ where: { id } });
    } catch (error: any) {
      errorHandler.addError(`Error deleting contact with ID ${id}: ${error.message}`);
      throw new Error(errorHandler.getErrors().join('; '));
    }
  },
};