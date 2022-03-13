import { Schema, Types, Model, model } from 'mongoose';
import apiary from './statics/apiary';

interface Apiary {
  title: string;
  owner: Types.ObjectId;
  coordinates: [];
}

interface ApiaryModel extends Model<Apiary> {
  createApiary(title: string, owner: Types.ObjectId, coordinates?: []): any;
  getMyApiaries(userId: Types.ObjectId) : any;
  getApiary(apiaryId: Types.ObjectId): any;
  deleteApiary(apiaryId: Types.ObjectId): any;
  editApiaryTitle(apiaryId: Types.ObjectId, title: string): any;
  editApiaryCoordinates(apiaryId: Types.ObjectId, newCoordinates: [number]): any;
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
apiarySchema.static('getApiary', apiary.getApiary);
apiarySchema.static('deleteApiary', apiary.deleteApiary);
apiarySchema.static('editApiaryTitle', apiary.editApiaryTitle);
apiarySchema.static('editApiaryCoordinates', apiary.editApiaryCoordinates);

export default model<Apiary, ApiaryModel>('apiary', apiarySchema);
