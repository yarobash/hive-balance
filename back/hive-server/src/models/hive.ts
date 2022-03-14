import { Schema, Types, Model, model } from 'mongoose';
import hive from './statics/hive';

interface Hive {
  title: string;
  apiary: Types.ObjectId;
  owner: Types.ObjectId;
  frames: [Types.ObjectId];
}

interface HiveModel extends Model<Hive> {
  createHive(title: string, apiary: Types.ObjectId, owner: Types.ObjectId, frames: [Types.ObjectId]): any;
  getHiveById(id: Types.ObjectId): any;
}

const hiveSchema = new Schema<Hive>({
  title: {
    type: String,
  },

  apiary: {
    type: Schema.Types.ObjectId,
    ref: 'apiary',
    required: true,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  frames: [Schema.Types.ObjectId], 
});

hiveSchema.static('createHive', hive.createHive);
hiveSchema.static('getHiveById', hive.getHiveById);

export default model<Hive, HiveModel>('hive', hiveSchema);
