
import { OrderRepository } from './order.repository';

export const OrderService = {
  getAllOrders: async () => {
    return await OrderRepository.getAll();
  },

  getOrderById: async (id: string) => {
    const order = await OrderRepository.getById(id);
    if (!order) throw new Error('Order not found');
    return order;
  },

  createOrder: async (data: {
    type: string;
    quantity: number;
    price: number;
    status: string;
  }) => {
    return await OrderRepository.create(data);
  },

  deleteOrder: async (id: string) => {
    return await OrderRepository.delete(id);
  },
};