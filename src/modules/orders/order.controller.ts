import { Request, Response } from "express";
import { OrderService } from "./order.service";

export const OrderController = {
  getAll: async (req: Request, res: Response) => {
    const orders = await OrderService.getAllOrders();
    res.json(orders);
  },

  getById: async (req: Request, res: Response) => {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      res.json(order);
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "Order not found" });
    }
  },

  create: async (req: Request, res: Response) => {
    const newOrder = await OrderService.createOrder(req.body);
    res.status(201).json(newOrder);
  },

  delete: async (req: Request, res: Response) => {
    try {
      await OrderService.deleteOrder(req.params.id);
      res.status(204).send();
    } catch (err) {
      console.log(err);
      res.status(404).json({ message: "Order not found" });
    }
  },
};
