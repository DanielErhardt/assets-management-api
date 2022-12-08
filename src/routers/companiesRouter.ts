import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';
import auth from '../middlewares/authentication';
import val from '../middlewares/validators';

const companiesRouter = Router();

const controller = new CompanyController();

companiesRouter.post('/', auth.admin, val.newCompany, controller.create);

companiesRouter.get('/', auth.admin, controller.findAll);

companiesRouter.get('/employees', auth.manager, controller.getEmployees);

companiesRouter.get('/assets', auth.manager, controller.getAssets);

companiesRouter.get('/units', auth.manager, controller.getUnits);

companiesRouter.get('/:id', auth.admin, controller.findById);

companiesRouter.patch('/employees/add/:employeeId', auth.manager, controller.addEmployee);

companiesRouter.patch('/employees/remove/:employeeId', auth.manager, controller.removeEmployee);

companiesRouter.patch('/assets/add/:assetId', auth.manager, controller.addAsset);

companiesRouter.patch('/assets/remove/:assetId', auth.manager, controller.removeAsset);

companiesRouter.patch('/units/add/:unitId', auth.manager, controller.addUnit);

companiesRouter.patch('/units/remove/:unitId', auth.manager, controller.removeUnit);

companiesRouter.put('/:id', auth.admin, controller.updateOne);

companiesRouter.delete('/:id', auth.admin, controller.deleteOne);

export default companiesRouter;
