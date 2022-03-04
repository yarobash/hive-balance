import { Schema, Model, model } from 'mongoose';
import userSignUpIn from './statics/userSignUpIn';

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

userSchema.static('createUser', userSignUpIn.createUser);
userSchema.static('findUserByCreds', userSignUpIn.findUserByCreds);

export default model<User, UserModel>('user', userSchema);
