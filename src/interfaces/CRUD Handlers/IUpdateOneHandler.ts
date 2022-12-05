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
