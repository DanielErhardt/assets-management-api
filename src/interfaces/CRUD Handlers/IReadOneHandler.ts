/** Generic interface for reading a single database object of type T. */
export interface IReadOneHandler<T> {
  /**
   * Reads the object containing "id".
   * @param id A valid object id.
   * @returns The object with "id" or null if not found.
   */
  readOne(id: string): Promise<T | null>;
}
