import { Schema, Types, Model, model } from 'mongoose';
import frame from './statics/frame';

interface Frame {
  title: string;
  type: string;
  width: number;
  height: number;
  owner?: Types.ObjectId;
}

interface FrameModel extends Model<Frame> {
  createFrame(title: string, type: string, width: number, height: number, owner?: Types.ObjectId): any;
  getAllFrames(owner: Types.ObjectId): any;
  getMyFrames(owner: Types.ObjectId): any;
  getStandardFrames(): any;
  getFrame(id: Types.ObjectId): any;
  deleteFrame(id: Types.ObjectId): any;
  editFrameTitle(id: string, newTitle: string): any;
  editFrameSize(id: string, newWidth: number, newHeight: number): any;
}

const frameSchema = new Schema<Frame>({
  title: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ['custom', 'standard'],
    required: true,
  },

  width: {
    type: Number,
    required: true,
  },

  height: {
    type: Number,
    required: true,
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    validate: {
      validator: function(owner: any) {
        return new Promise(function(resolve, reject) {
          let Users = model('user');
          Users.findOne({_id: owner}, (err: any, pers: any) => resolve(pers ? true : false));
        });
      },
      message: props => `Owner with id: \`${props.value}\' doesn't exist`,
    },
  },
});

frameSchema.static('createFrame', frame.createFrame);
frameSchema.static('getAllFrames', frame.getAllFrames);
frameSchema.static('getMyFrames', frame.getMyFrames);
frameSchema.static('getStandardFrames', frame.getStandardFrames);
frameSchema.static('getFrame', frame.getFrame);
frameSchema.static('deleteFrame', frame.deleteFrame);
frameSchema.static('editFrameTitle', frame.editFrameTitle);
frameSchema.static('editFrameSize', frame.editFrameSize);

export default model<Frame, FrameModel>('frame', frameSchema);
