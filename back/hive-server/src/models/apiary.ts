import { Schema, Types, model } from 'mongoose';

interface Apiary {
  title: string;
  owner: Types.ObjectId;
  latdec?: number;
  londec?: number;
}

const apiarySchema = new Schema<Apiary>({
  title: {
    type: String,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },

  latdec: { 
    type: Number,
  },

  londec: {
    type: Number,
  },
});

export default model('apiary', apiarySchema);
