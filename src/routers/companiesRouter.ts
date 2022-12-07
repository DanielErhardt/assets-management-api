import { Router } from 'express';

const companiesRouter = Router();

companiesRouter.post('/');

companiesRouter.get('/');

companiesRouter.get('/:id');

companiesRouter.put('/:id');

companiesRouter.delete('/:id');

export default companiesRouter;
