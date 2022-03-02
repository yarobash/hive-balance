import { Schema, Model, model } from 'mongoose';
import userSignUpIn from './statics/userSignUpIn';

interface IUser {
  name: string;
  email: string;
  password: string;
  createIUser: any;
}

interface UserModel extends Model<IUser> {
  createUser(name: string, email: string, password: string): any;
}

const userSchema = new Schema<IUser, UserModel>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.static('createUser', userSignUpIn.createUser);

export default model<IUser, UserModel>('user', userSchema);
