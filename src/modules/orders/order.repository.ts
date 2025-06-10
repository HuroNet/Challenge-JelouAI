import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const OrderRepository = {
  async getAll() {
    return prisma.tradeOrder.findMany();
  },

  async getById(id: string) {
    return prisma.tradeOrder.findUnique({ where: { id } });
  },

  async create(data: {
    type: string;
    quantity: number;
    price: number;
    status: string;
  }) {
    return prisma.tradeOrder.create({
      data: {
        type: data.type,
        quantity: data.quantity,
        price: data.price,
        status: data.status,
      },
    });
  },

  async delete(id: string) {
    return prisma.tradeOrder.delete({ where: { id } });
  },
};