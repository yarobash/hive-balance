import { Schema, Types, model } from 'mongoose';

interface Weight {
  hive: Types.ObjectId;
  dateTime: Date;
  weight: number;
}

const schema = new Schema<Weight>({
  hive: {
    type: Schema.Types.ObjectId,
    ref: 'hive',
    required: true,
  },

  dateTime: {
    type: Date,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },
});
