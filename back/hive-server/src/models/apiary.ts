import { Schema, Types, Model, model } from 'mongoose';
import apiary from './statics/apiary';

interface Apiary {
  title: string;
  owner: Types.ObjectId;
  coordinates: [];
}

interface ApiaryModel extends Model<Apiary> {
  createApiary(title: string, owner: Schema.Types.ObjectId, coordinates?: []): any;
  getMyApiaries(userId: string) : any;
}

const apiarySchema = new Schema<Apiary>({
  title: {
    type: String,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Owner Id is required'],
    validate: {
      validator: function(owner: any) {
        return new Promise(function(resolve, reject) {
          let Users = model('user');
          Users.findOne({_id: owner}, (err: any, pers: any) => resolve(pers ? true : false));
        });
      },
      message: props => `Owner with id:\'${props.value}\` doesn't exist`,
    }
  },

  coordinates: {
    type: [Number],
    validate: {
      validator: function(arr: []) {
        return arr.length === 0 || arr.length === 2;
      },
      message: props => `\'${props.value}\' is not a valid coordinates`
    },
  },
});

apiarySchema.static('createApiary', apiary.createApiary); 
apiarySchema.static('getMyApiaries', apiary.getMyApiaries);

export default model<Apiary, ApiaryModel>('apiary', apiarySchema);
