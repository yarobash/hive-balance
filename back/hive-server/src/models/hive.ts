import mongoose from 'mongoose';

const { Schema, model } = mongoose;

interface Hive {
  title: string;
  apiary: string;
}

const schema = new Schema<Hive>({
  title: {
    type: String,
  },

  apiary: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'apiary',
    required: true,
  },
});
