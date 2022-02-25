import { Schema, Types, model } from 'mongoose';

interface Apiary {
  title: string;
  owner: Types.ObjectId;
  latitude: number;
  longitude: number;
}

const schema = new Schema<Apiary>({
  title: {
    type: String,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },

  latitude: { 
    type: Number,
  },

  longitude: {
    type: Number,
  },
});
