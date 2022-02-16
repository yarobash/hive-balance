import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface User {
  name: string;
  email: string;
  password: string;
  apiaries: string[];
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

  apiaries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'apiary',
    default: [],
  }],
});
