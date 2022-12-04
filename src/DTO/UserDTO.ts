import { User, userZodType } from '../@types/User';
import DTO from './DTO';

class UserDTO extends DTO<User> {
  constructor(data: unknown) {
    super(data, userZodType);
  }
}

export default UserDTO;
