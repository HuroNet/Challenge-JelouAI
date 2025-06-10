import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const ContactRepository = {
  async getAll() {
    return prisma.contact.findMany();
  },

  async getById(id: string) {
    return prisma.contact.findUnique({ where: { id } });
  },

  async create(data: {
    name: string;
    email: string;
    phone?: string;
    contactType: string;
  }) {
    return prisma.contact.create({ data });
  },

  async delete(id: string) {
    return prisma.contact.delete({ where: { id } });
  }
};