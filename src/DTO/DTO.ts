import { ZodType } from 'zod';

class DTO<T> {
  public safeData: T;

  constructor(data: unknown, zodType: ZodType<T>) {
    const parsed = zodType.safeParse(data);

    if (!parsed.success) throw parsed.error;

    this.safeData = parsed.data;
  }
}

export default DTO;
