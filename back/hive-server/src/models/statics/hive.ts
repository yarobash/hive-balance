import { Types } from 'mongoose';
import * as customErrors from '../../utils/errors/CustomErrors';
import fullErrMsg from '../../utils/errors/fullErrMsg';

export default {
  createHive(title: string, apiary: Types.ObjectId, owner: Types.ObjectId, frames: [string]) {
    return this.create({ title: title, apiary: apiary, owner: owner, frames: frames })
      .then((hive: any) => hive)
      .catch((err: any) => Promise.reject(new customErrors.Error400(fullErrMsg(err))));
  },
}
