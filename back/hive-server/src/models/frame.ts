import { Schema, Types, model } from 'mongoose';

interface Frame {
  title: string;
  hive: Types.ObjectId;
  length: number;
  height: number;
}

const schema = new Schema<Frame>({
  title: {
    type: String,
  },

  hive: {
    type: Schema.Types.ObjectId,
    ref: 'hive',
    required: true,
  },

  length: {
    type: Number,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },
});
