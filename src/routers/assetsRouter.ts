import { Router } from 'express';
import AssetController from '../controllers/AssetController';

const assetsRouter = Router();

const controller = new AssetController();

assetsRouter.post('/', controller.create);

assetsRouter.get('/', controller.findAll);

assetsRouter.get('/:id/status', controller.getStatus);

assetsRouter.get('/:id/health', controller.getHealth);

assetsRouter.get('/:id', controller.findById);

assetsRouter.put('/:id', controller.updateOne);

assetsRouter.patch('/:id/health/:newHealth', controller.setHealth);

assetsRouter.patch('/:id/status/:newStatus', controller.setStatus);

assetsRouter.delete('/:id', controller.deleteOne);

export default assetsRouter;
