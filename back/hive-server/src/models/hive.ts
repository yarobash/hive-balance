import { Schema, Types, model } from 'mongoose';

interface Hive {
  title: string;
  apiary: Types.ObjectId;
}

const schema = new Schema<Hive>({
  title: {
    type: String,
  },

  apiary: {
    type: Schema.Types.ObjectId,
    ref: 'apiary',
    required: true,
  },
});
