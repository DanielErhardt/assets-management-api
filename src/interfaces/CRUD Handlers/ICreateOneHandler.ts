/** Generic interface for creating a single database object of type T. */
export interface ICreateOneHandler<T> {
  /**
   * Creates a new object with the provided information.
   * @param object Object containg all necessary information.
   * @returns A copy of the created object. It contains aditional iformation when available.
   */
  createOne(object: T): Promise<T>;
}
