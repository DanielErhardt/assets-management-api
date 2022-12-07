/** Generic interface for reading all database objects of type T. */
export interface IFindAllHandler<T> {
  /**
   * Reads all available objects.
   * @returns A list containg all found objects.
   */
  findAll(): Promise<T[]>;
}
