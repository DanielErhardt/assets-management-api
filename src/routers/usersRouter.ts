import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/login');

usersRouter.post('/');

usersRouter.get('/');

usersRouter.get('/:id');

usersRouter.put('/:id');

usersRouter.patch('/resetPassword/:id');

usersRouter.delete('/:id');

export default usersRouter;
