import { Router } from 'express';
import { ContactController } from './contact.controller';

const router = Router();

router.get('/', ContactController.getAll);
router.get('/:id', ContactController.getById);
router.post('/', ContactController.create);
router.delete('/:id', ContactController.delete);

export default router;