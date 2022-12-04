/** Generic interface for creating a single database object of type T. */
export interface ICreateOneHandler<T> {
  /**
   * Creates a new object with the provided information.
   * @param object Object containg all necessary information.
   * @returns A copy of the created object. It contains aditional iformation when available.
   */
  createOne(object: T): Promise<T>;
}

/** Generic interface for reading a single database object of type T. */
export interface IReadOneHandler<T> {
  /**
   * Reads the object containing "id".
   * @param id A valid object id.
   * @returns The object with "id" or null if not found.
   */
  readOne(id: string): Promise<T | null>;
}

/** Generic interface for reading all database objects of type T. */
export interface IReadAllHandler<T> {
  /**
   * Reads all available objects.
   * @returns A list containg all found objects.
   */
  readAll(): Promise<T[]>;
}

/** Generic interface for updating a single database object of type T. */
export interface IUpdateOneHandler<T> {
  /**
   * Inserts the properties in "values" into the object containing "id".
   * @param id A valid object id.
   * @param values Partial object of type T, containing the values to update.
   * @returns The updated object or null if id not found.
   */
  updateOne(id: string, values: Partial<T>): Promise<T | null>;
}

/** Generic interface for deleting a single database object of type T. */
export interface IDeleteOneHandler<T> {
  /**
   * Deletes the object containing "id".
   * @param id A valid object id.
   * @returns A copy of the deleted object or null if id not found.
   */
  deleteOne(id: string): Promise<T | null>;
}
