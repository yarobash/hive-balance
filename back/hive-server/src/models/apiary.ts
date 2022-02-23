import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface Apiary {
  title: string;
  owner: string;
  latitude: number;
  longitude: number;
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

  latitude: { 
    type: Number,
  },

  longitude: {
    type: Number,
  },
});
