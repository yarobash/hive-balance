import { Schema, Model, model } from 'mongoose';
import userSignUpIn from './statics/userSignUpIn';

interface User {
  name: string;
  email: string;
  password: string;
}

interface UserModel extends Model<User> {
  createUser(name: string, email: string, password: string): any;
}

const userSchema = new Schema<User, UserModel>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: [true, 'Не указан адрес электронной почты'],
  },

  password: {
    type: String,
    required: [true, 'Не указан пароль'],
    select: false,
  },
});

userSchema.static('createUser', userSignUpIn.createUser);

export default model<User, UserModel>('user', userSchema);
