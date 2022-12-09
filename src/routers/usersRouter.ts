import { Router } from 'express';
import UserController from '../controllers/UserController';
import auth from '../middlewares/authentication';
import val from '../middlewares/validators';

const usersRouter = Router();

const controller = new UserController();

usersRouter.post('/login', val.login, controller.login);

usersRouter.post('/', auth.admin, val.newUser, controller.create);

usersRouter.get('/', auth.manager, controller.findAll);

usersRouter.get('/:id', auth.manager, controller.findById);

usersRouter.patch('/:id/role/:newRole', auth.admin, controller.assignRole);

usersRouter.put('/:id', auth.admin, controller.updateOne);

usersRouter.delete('/:id', auth.admin, controller.deleteOne);

export default usersRouter;
