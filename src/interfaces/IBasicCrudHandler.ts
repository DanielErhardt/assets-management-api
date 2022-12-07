import { ICreateOneHandler } from './CRUD Handlers/ICreateOneHandler';
import { IDeleteOneHandler } from './CRUD Handlers/IDeleteOneHandler';
import { IFindAllHandler } from './CRUD Handlers/IFindAllHandler';
import { IFindByIdHandler } from './CRUD Handlers/IFindByIdHandler';
import { IUpdateOneHandler } from './CRUD Handlers/IUpdateOneHandler';

/**
 * Generic interface that condenses all basic CRUD handling interfaces.
 */
export interface IBasicCrudHandler<T> extends
  ICreateOneHandler<T>,
  IFindByIdHandler<T>,
  IFindAllHandler<T>,
  IUpdateOneHandler<T>,
  IDeleteOneHandler<T> {}
