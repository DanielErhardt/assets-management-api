import { Schema } from 'mongoose';
import { User } from '../../@types/Entities/User';

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, 'User name is required.'],
  },
  email: {
    type: String,
    required: [true, 'User email is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'User password is required'],
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'manager', 'admin'],
    required: [true, 'A valid role must be assigned to User.'],
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: [true, 'User\'s company Id must be assigned.'],
  },
}, { toObject: { getters: true } });

export default userSchema;
