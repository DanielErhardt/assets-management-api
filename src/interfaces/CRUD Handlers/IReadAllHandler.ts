/** Generic interface for reading all database objects of type T. */
export interface IReadAllHandler<T> {
  /**
   * Reads all available objects.
   * @returns A list containg all found objects.
   */
  readAll(): Promise<T[]>;
}
