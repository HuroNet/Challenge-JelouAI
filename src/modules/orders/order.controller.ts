import { Request, Response } from "express";
import { OrderService } from "./order.service";

export const OrderController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const orders = await OrderService.getAllOrders();
      res.json(orders);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      res.json(order);
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      const newOrder = await OrderService.createOrder(req.body);
      res.status(201).json(newOrder);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      await OrderService.deleteOrder(req.params.id);
      res.status(204).send();
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  },
};