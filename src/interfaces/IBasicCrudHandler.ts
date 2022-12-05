import { ICreateOneHandler } from './CRUD Handlers/ICreateOneHandler';
import { IDeleteOneHandler } from './CRUD Handlers/IDeleteOneHandler';
import { IReadAllHandler } from './CRUD Handlers/IReadAllHandler';
import { IReadOneHandler } from './CRUD Handlers/IReadOneHandler';
import { IUpdateOneHandler } from './CRUD Handlers/IUpdateOneHandler';

/**
 * Generic interface that condenses all basic CRUD handling interfaces.
 */
export interface IBasicCrudHandler<T> extends
  ICreateOneHandler<T>,
  IReadOneHandler<T>,
  IReadAllHandler<T>,
  IUpdateOneHandler<T>,
  IDeleteOneHandler<T> {}
