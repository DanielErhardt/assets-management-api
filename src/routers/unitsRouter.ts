import { Router } from 'express';
import UnitController from '../controllers/UnitController';

const unitsRouter = Router();

const controller = new UnitController();

unitsRouter.post('/', controller.create);

unitsRouter.get('/', controller.findAll);

unitsRouter.get('/:id', controller.findById);

unitsRouter.patch(':id/assets/add/:assetId', controller.addAsset);

unitsRouter.patch(':id/assets/remove/:assetId', controller.removeAsset);

unitsRouter.put('/:id', controller.updateOne);

unitsRouter.delete('/:id', controller.deleteOne);

export default unitsRouter;
