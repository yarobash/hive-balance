import { Types } from 'mongoose';
import CustomError from '../../utils/errors/CustomError';
import fullErrMsg from '../../utils/errors/fullErrMsg';
import errMsgs from '../../shared/constants/errorMessages';

export default {
  createHive(title: string, apiary: Types.ObjectId, owner: Types.ObjectId, frames: [string]) {
    return this.create({ title: title, apiary: apiary, owner: owner, frames: frames })
      .then((hive: any) => hive)
      .catch((err: any) => Promise.reject(new CustomError(400, fullErrMsg(err))));
  },

  getHiveById(id: Types.ObjectId) {
    return this.findById(id)
      .orFail(new CustomError(404, errMsgs.nonexistentHive(id)))
      .then((hive: any) => hive)
      .catch((err: any) => Promise.reject(err));
  },

  getHivesByApiaryId(apiaryId: Types.ObjectId, ownerId: Types.ObjectId) {
    return this.find({apiary: apiaryId, owner: ownerId})
      .orFail(new CustomError(404, errMsgs.nonexistentHives(apiaryId, ownerId)))
      .then((hives: any) => hives)
      .catch((err: any) => Promise.reject(err));
  },

  updateHiveTitle(hiveId: Types.ObjectId, newTitle: string) {
    return this.findByIdAndUpdate(
      hiveId,
      {title: newTitle},
      {new: true},
    )
    .orFail(new CustomError(404, errMsgs.nonexistentHive(hiveId)))
    .then((hive: any) => hive)
    .catch((err: any) => Promise.reject(err));
  },

  updateHiveFrames(hiveId: Types.ObjectId, newFrames: [Types.ObjectId]) {
    return this.findByIdAndUpdate(
      hiveId,
      {frames: newFrames},
      {new: true},
    )
    .orFail(new CustomError(404, errMsgs.nonexistentHive(hiveId)))
    .then((hive: any) => hive)
    .catch((err: any) => Promise.reject(err));
  },
}
