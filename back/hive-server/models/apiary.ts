import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface Apiary {
  title: string;
  owner: string;
  hives: string[];
}

const schema = new Schema<Apiary>({
  title: {
    type: String,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  hives: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hive',
    default: [],
  }],
});
