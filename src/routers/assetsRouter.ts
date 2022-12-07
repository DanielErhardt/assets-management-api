import { Router } from 'express';

const assetsRouter = Router();

assetsRouter.post('/');

assetsRouter.get('/');

assetsRouter.get('/status/:id');

assetsRouter.get('/health/:id');

assetsRouter.get('/:id');

assetsRouter.put('/:id');

assetsRouter.patch('/updateHealth/:id/:health');

assetsRouter.patch('/start/:id');

assetsRouter.patch('/stop/:id');

assetsRouter.delete('/:id');

export default assetsRouter;
