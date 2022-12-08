/** Generic interface for reading a single database object of type T. */
export interface IFindByIdHandler<T> {
  /**
   * Reads the object containing "id".
   * @param id A valid object id.
   * @returns The object with "id" or null if not found.
   */
  findById(id: string): Promise<T | null> | Promise<T>;
}
