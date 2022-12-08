import { Request, Response } from 'express';
import codes from 'http-status-codes';
import { Entity } from '../@types/Entities';
import Service from '../services/Service';

abstract class Controller<T extends Entity> {
  protected abstract _service: Service<T>;

  async create(req: Request, res: Response): Promise<Response> {
    const { body } = req;
    const created = await this._service.createOne(body as T);
    return res.status(codes.CREATED).json(created);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const found = await this._service.findById(id);
    return res.status(codes.OK).json(found);
  }

  async findAll(_req: Request, res: Response): Promise<Response> {
    const all = await this._service.findAll();
    return res.status(codes.OK).json(all);
  }

  async updateOne(req: Request, res: Response): Promise<Response> {
    const { body, params: { id } } = req;
    const updated = await this._service.updateOne(id, body as Partial<T>);
    return res.status(codes.OK).json(updated);
  }

  async deleteOne(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    await this._service.deleteOne(id);
    return res.status(codes.NO_CONTENT).json({ message: 'Object successfully deleted.' });
  }
}

export default Controller;
