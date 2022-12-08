import { Router } from 'express';
import UserController from '../controllers/UserController';

const usersRouter = Router();

const controller = new UserController();

usersRouter.post('/login', controller.login);

usersRouter.post('/', controller.create);

usersRouter.get('/', controller.findAll);

usersRouter.get('/:id', controller.findById);

usersRouter.patch('/:id/role/:newRole', controller.assignRole);

usersRouter.put('/:id', controller.updateOne);

usersRouter.delete('/:id', controller.deleteOne);

export default usersRouter;
