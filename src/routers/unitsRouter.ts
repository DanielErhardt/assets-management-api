import { Router } from 'express';

const unitsRouter = Router();

unitsRouter.post('/');

unitsRouter.get('/');

unitsRouter.get('/:id');

unitsRouter.patch('/assignAsset/:assetId');

unitsRouter.patch('/removeAsset/:assetId');

unitsRouter.put('/:id');

unitsRouter.delete('/:id');

export default unitsRouter;
