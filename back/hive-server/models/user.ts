import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface User {
  name: string;
  email: string;
  password: string;
}

const schema = new Schema<User>({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});
