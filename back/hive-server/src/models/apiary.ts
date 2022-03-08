import { Schema, Types, Model, model } from 'mongoose';

interface Apiary {
  title: string;
  owner: Types.ObjectId;
  coordinates: [];
}

interface ApiaryModel extends Model<Apiary> {
  createApiary(title: string, owner: Schema.Types.ObjectId, latdec?: number, londec?: number): any;
}

const coordinatesSchema = new Schema({ angle: Number });

const apiarySchema = new Schema<Apiary>({
  title: {
    type: String,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },

  coordinates: [coordinatesSchema],
   
});



export default model('apiary', apiarySchema);
