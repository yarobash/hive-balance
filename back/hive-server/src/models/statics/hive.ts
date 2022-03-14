import { Types } from 'mongoose';
import * as customErrors from '../../utils/errors/CustomErrors';
import fullErrMsg from '../../utils/errors/fullErrMsg';

export default {
  createHive(title: string, apiary: Types.ObjectId, owner: Types.ObjectId, frames: [string]) {
    return this.create({ title: title, apiary: apiary, owner: owner, frames: frames })
      .then((hive: any) => hive)
      .catch((err: any) => Promise.reject(new customErrors.Error400(fullErrMsg(err))));
  },

  getHiveById(id: Types.ObjectId) {
    return this.findById(id)
      .orFail(new customErrors.Error404(`Hive with _id: ${id} not found`))
      .then((hive: any) => hive)
      .catch((err: any) => Promise.reject(err));
  },

  getHivesByApiaryId(apiaryId: Types.ObjectId, ownerId: Types.ObjectId) {
    return this.find({apiary: apiaryId, owner: ownerId})
      .orFail(new customErrors.Error404(`Apiary with id: ${apiaryId} or owner with id: ${ownerId} not found`))
      .then((hives: any) => hives)
      .catch((err: any) => Promise.reject(err));
  },

  updateHiveTitle(hiveId: Types.ObjectId, newTitle: string) {
    return this.findByIdAndUpdate(
      hiveId,
      {title: newTitle},
      {new: true},
    )
    .orFail(new customErrors.Error404(`Hive with id: ${hiveId} not found`))
    .then((hive: any) => hive)
    .catch((err: any) => Promise.reject(err));
  },

  updateHiveFrames(hiveId: Types.ObjectId, newFrames: [Types.ObjectId]) {
    return this.findByIdAndUpdate(
      hiveId,
      {frames: newFrames},
      {new: true},
    )
    .orFail(new customErrors.Error404(`Hive with id: ${hiveId} not found`))
    .then((hive: any) => hive)
    .catch((err: any) => Promise.reject(err));
  },
}
