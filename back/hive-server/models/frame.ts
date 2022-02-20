import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface Frame {
  title: string;
  hive: string;
  length: number;
  height: number;
}

const schema = new Schema<Frame>({
  title: {
    type: String,
  },

  hive: {
    type: mongoose.Schema.Types.ObjectId,
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
