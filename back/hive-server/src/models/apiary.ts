import { Schema, Types, Model, model } from 'mongoose';
import apiary from './statics/apiary';

interface Apiary {
  title: string;
  owner: Types.ObjectId;
  coordinates: [];
}

interface ApiaryModel extends Model<Apiary> {
  createApiary(title: string, owner: Schema.Types.ObjectId, coordinates?: []): any;
}

const apiarySchema = new Schema<Apiary>({
  title: {
    type: String,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },

  coordinates: {
    type: [Number],
    validate: {
      validator: function(arr: []) {
        return arr.length === 0 || arr.length === 2;
      },
      message: props => `${props} is not a valid coordinates`
    },
  },
});

apiarySchema.static('createApiary', apiary.createApiary); 
export default model<Apiary, ApiaryModel>('apiary', apiarySchema);
