import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface User {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
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

const UserModel = model<User>('User', userSchema);
