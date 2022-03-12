import * as customErrors from '../../utils/errors/CustomErrors';
import fullErrMsg from '../../utils/errors/fullErrMsg';

export default {
  createFrame(title: string, type: string, width: number, height: number, owner?: string): any {
    return this.create({title, type, width, height, owner})
      .then((frame: any) => frame)
      .catch((err: any) => Promise.reject(new customErrors.Error400(fullErrMsg(err))));
  },

  // get all standard and all user's frames
  getAllFrames(owner: string): any {
    return this.find({ $or: [ { type: "standard" }, { owner: owner } ] })
      .then((frames: any) => frames)
      .catch((err: any) => Promise.reject(new customErrors.Error401(fullErrMsg(err))));
  },

  getMyFrames(owner: string): any {
    return this.find({owner: owner})
      .then((frames: any) => frames)
      .catch((err: any) => Promise.reject(new customErrors.Error401(fullErrMsg(err))));
  },

  getStandardFrames(): any {
    return this.find({type: 'standard'})
      .then((frames: any) => frames)
      .catch((err: any) => Promise.reject(new customErrors.Error401(fullErrMsg(err))));
  },
}
