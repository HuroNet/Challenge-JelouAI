import { Router } from 'express';
import { OrderController } from './order.controller';

const router = Router();

router.get('/', OrderController.getAll);
router.get('/:id', OrderController.getById);
router.post('/', OrderController.create);
router.delete('/:id', OrderController.delete);

export default router;