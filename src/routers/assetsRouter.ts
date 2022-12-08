import { Router } from 'express';
import AssetController from '../controllers/AssetController';
import auth from '../middlewares/authentication';
import val from '../middlewares/validators';

const assetsRouter = Router();

const controller = new AssetController();

assetsRouter.post('/', auth.manager, val.newAsset, controller.create);

assetsRouter.get('/', auth.user, controller.findAll);

assetsRouter.get('/:id/status', auth.user, controller.getStatus);

assetsRouter.get('/:id/health', auth.user, controller.getHealth);

assetsRouter.get('/:id', auth.user, controller.findById);

assetsRouter.put('/:id', auth.manager, controller.updateOne);

assetsRouter.patch('/:id/health/:newHealth', auth.user, val.assetHealth, controller.setHealth);

assetsRouter.patch('/:id/status/:newStatus', auth.user, val.assetStatus, controller.setStatus);

assetsRouter.delete('/:id', auth.manager, controller.deleteOne);

export default assetsRouter;
