import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface Weight {
  hive: string;
  dateTime: string;
  weight: number;
}

const schema = new Schema<Weight>({
  hive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hive',
    required: true,
  },

  dateTime: {
    type: Date,
    default: Date.now(),
  },

  weight: {
    type: Number,
    required: true,
  },
});
