import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';
import auth from '../middlewares/authentication';
import val from '../middlewares/validators';

const companiesRouter = Router();

const controller = new CompanyController();

companiesRouter.post('/', auth.admin, val.newCompany, controller.create);

companiesRouter.get('/', auth.admin, controller.findAll);

companiesRouter.get('/:id/employees', auth.manager, controller.getEmployees);

companiesRouter.get('/:id/assets', auth.manager, controller.getAssets);

companiesRouter.get('/:id/units', auth.manager, controller.getUnits);

companiesRouter.get('/:id', auth.admin, controller.findById);

companiesRouter.patch('/:id/employees/add/:employeeId', auth.manager, controller.addEmployee);

companiesRouter.patch('/:id/employees/remove/:employeeId', auth.manager, controller.removeEmployee);

companiesRouter.patch('/:id/assets/add/:assetId', auth.manager, controller.addAsset);

companiesRouter.patch('/:id/assets/remove/:assetId', auth.manager, controller.removeAsset);

companiesRouter.patch('/:id/units/add/:unitId', auth.manager, controller.addUnit);

companiesRouter.patch('/:id/units/remove/:unitId', auth.manager, controller.removeUnit);

companiesRouter.put('/:id', auth.admin, controller.updateOne);

companiesRouter.delete('/:id', auth.admin, controller.deleteOne);

export default companiesRouter;
