/** Generic interface for deleting a single database object of type T. */
export interface IDeleteOneHandler<T> {
  /**
   * Deletes the object containing "id".
   * @param id A valid object id.
   * @returns A copy of the deleted object or null if id not found.
   */
  deleteOne(id: string): Promise<T | null> | Promise<T>;
}
