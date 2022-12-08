import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';

const companiesRouter = Router();

const controller = new CompanyController();

companiesRouter.post('/', controller.create);

companiesRouter.get('/', controller.findAll);

companiesRouter.get('/:id/employees', controller.getEmployees);

companiesRouter.get('/:id/assets', controller.getAssets);

companiesRouter.get('/:id/units', controller.getUnits);

companiesRouter.get('/:id', controller.findById);

companiesRouter.patch('/:id/employees/add/:employeeId', controller.addEmployee);

companiesRouter.patch('/:id/employees/remove/:employeeId', controller.removeEmployee);

companiesRouter.patch('/:id/assets/add/:assetId', controller.addAsset);

companiesRouter.patch('/:id/assets/remove/:assetId', controller.removeAsset);

companiesRouter.patch('/:id/units/add/:unitId', controller.addUnit);

companiesRouter.patch('/:id/units/remove/:unitId', controller.removeUnit);

companiesRouter.put('/:id', controller.updateOne);

companiesRouter.delete('/:id', controller.deleteOne);

export default companiesRouter;
