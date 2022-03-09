import { Schema, Model, model } from 'mongoose';
import user from './statics/user';

interface User {
  name: string;
  email: string;
  password: string;
}

interface UserModel extends Model<User> {
  createUser(name: string, email: string, password: string): any;
  findUserByCreds(name: string, password: string): any;
}

const userSchema = new Schema<User, UserModel>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: [true, 'Email address is not specified'],
  },

  password: {
    type: String,
    required: [true, 'Password is not specified'],
    select: false,
  },
});

userSchema.static('createUser', user.createUser);
userSchema.static('findUserByCreds', user.findUserByCreds);

export default model<User, UserModel>('user', userSchema);
