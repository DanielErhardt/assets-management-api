export interface IModel<T> {
  /**
   * Creates a new object with the provided information.
   * @param object Object containg all necessary information.
   * @returns A copy of the created object. It contains aditional iformation when available.
   */
  createOne(object: T): Promise<T>;

  /**
  * Finds the object containing "id".
  * @param id A valid object id.
  * @returns The object with "id" or null if not found.
  */
  findById(id: string): Promise<T | null>;

  /**
   * Finds all available objects.
   * @returns A list containg all found objects.
   */
  findAll(): Promise<T[]>;

  /**
   * Updates the object containing "id" with the properties in "values".
   * @param id A valid object id.
   * @param values Partial object of type T, containing the values to update.
   * @returns The updated object or null if id not found.
   */
  updateOne(id: string, values: Partial<T>): Promise<T | null>;

  /**
   * Deletes the object containing "id".
   * @param id A valid object id.
   * @returns A copy of the deleted object or null if id not found.
   */
  deleteOne(id: string): Promise<T | null>;
}
