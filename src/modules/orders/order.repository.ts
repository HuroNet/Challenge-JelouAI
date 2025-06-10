import { PrismaClient } from '@prisma/client';
import { ErrorHandler } from '../../shared/error.handler';

const prisma = new PrismaClient();
const errorHandler = new ErrorHandler();

export const OrderRepository = {
  async getAll() {
    try {
      return await prisma.tradeOrder.findMany();
    } catch (error: any) {
      errorHandler.addError(`Error fetching orders: ${error.message}`);
      throw new Error(errorHandler.getErrors().join('; '));
    }
  },

  async getById(id: string) {
    try {
      return await prisma.tradeOrder.findUnique({ where: { id } });
    } catch (error: any) {
      errorHandler.addError(`Error fetching order with ID ${id}: ${error.message}`);
      throw new Error(errorHandler.getErrors().join('; '));
    }
  },

  async create(data: {
    type: string;
    quantity: number;
    price: number;
    status: string;
  }) {
    try {
      return await prisma.tradeOrder.create({ data });
    } catch (error: any) {
      errorHandler.addError(`Error creating order: ${error.message}`);
      throw new Error(errorHandler.getErrors().join('; '));
    }
  },

  async delete(id: string) {
    try {
      return await prisma.tradeOrder.delete({ where: { id } });
    } catch (error: any) {
      errorHandler.addError(`Error deleting order with ID ${id}: ${error.message}`);
      throw new Error(errorHandler.getErrors().join('; '));
    }
  },
};