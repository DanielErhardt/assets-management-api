import { Router } from 'express';
import UnitController from '../controllers/UnitController';
import auth from '../middlewares/authentication';
import val from '../middlewares/validators';

const unitsRouter = Router();

const controller = new UnitController();

unitsRouter.post('/', auth.manager, val.newUnit, controller.create);

unitsRouter.get('/', auth.manager, controller.findAll);

unitsRouter.get('/:id', auth.manager, controller.findById);

unitsRouter.patch('/:id/assets/add/:assetId', auth.manager, controller.addAsset);

unitsRouter.patch('/:id/assets/remove/:assetId', auth.manager, controller.removeAsset);

unitsRouter.put('/:id', auth.manager, controller.updateOne);

unitsRouter.delete('/:id', auth.manager, controller.deleteOne);

export default unitsRouter;
