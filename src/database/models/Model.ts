import { model, Schema } from 'mongoose';
import { IModel } from '../../interfaces/IModel';
import { Entity, Archive } from '../../@types/Entities';
import archiveSchema from '../schemas/archiveSchema';

abstract class Model<T extends Entity> implements IModel<T> {
  protected abstract _populate: string;
  private _archive;
  protected _model;

  constructor(entityName: string, schema: Schema) {
    this._model = model(entityName, schema);
    this._archive = model('Archive', archiveSchema);
  }

  async createOne(object: T): Promise<T> {
    const created = await this._model.create(object);
    return created as T;
  }

  async findById(id: string): Promise<T | null> {
    const found = await this._model.findById(id)
      .populate(this._populate);

    return found as T;
  }

  async findAll(): Promise<T[]> {
    const all = await this._model.find()
      .populate(this._populate);

    return all as T[];
  }

  async updateOne(id: string, values: Partial<T>): Promise<T | null> {
    const updated = await this._model.findByIdAndUpdate(
      id,
      values,
      { new: true },
    );

    await updated?.populate(this._populate);

    return updated as T | null;
  }

  async deleteOne(id: string): Promise<T | null> {
    const deleted = await this._model.findByIdAndDelete(id);

    if (!deleted) return null;

    // This saves the object in an archive that is only accessible by the database admins.
    // With this, data is not lost forever and can be consulted if necessary.
    const archived: Archive = {
      collectionName: this._model.collection.collectionName,
      document: deleted,
    };

    await this._archive.create(archived);

    return deleted as T;
  }

  async seed(objects: T[], reset = true): Promise<void> {
    if (reset) await this._model.deleteMany();
    await this._model.insertMany(objects);
  }
}

export default Model;
