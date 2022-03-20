import CustomError from '../../utils/errors/CustomError';
import fullErrMsg from '../../utils/errors/fullErrMsg';

export default {
  createApiary(title: string, owner: string, coordinates?: []): any {
    return this.create({title, owner, coordinates})
      .then((apiary: any) => apiary)
      .catch((err:any) => { 
        return Promise.reject(new CustomError(400, fullErrMsg(err)))
      });
  },

  getMyApiaries(userId: string) {
    return this.find({ owner: userId })
      .orFail(new CustomError(400, `User: ${userId} doesn't have any apiary`))
      .then((apiaries: any) => apiaries)
      .catch((err: any) => Promise.reject(err));
  },

  getApiary(apiaryId: string) {
    return this.findOne({ _id: apiaryId })
      .orFail(new CustomError(400, `Apiary: ${apiaryId} doesn't exist`))
      .then((apiary: any) => apiary)
      .catch((err: any) => Promise.reject(err));
  },

  deleteApiary(apiaryId: string) {
    return this.findByIdAndRemove(apiaryId)
      .orFail(new CustomError(400, 'Entity to delete not found'))
      .then((apiary: any) => apiary)
      .catch((err: any) => Promise.reject(err));
  },

  editApiaryTitle(apiaryId: string, title: string) {
    return this.findByIdAndUpdate(
      apiaryId,
      { $set: { title: title } },
      { new: true },
    )
      .orFail(new CustomError(400, `Apiary: ${apiaryId} doesn't exist`))
      .then((apiary: any) => apiary)
      .catch((err: any) => Promise.reject(err));
  },

  editApiaryCoordinates(apiaryId: string, newCoordinates: [number]) {
     return this.findByIdAndUpdate(
       apiaryId,
       { $set: { coordinates: newCoordinates } },
       { new: true, runValidators: true },
     )
       .orFail(new CustomError(400, `Apiary: ${apiaryId} doesn't exist`))
       .then((apiary: any) => apiary)
       .catch((err: any) => Promise.reject(new CustomError(401, fullErrMsg(err))));
  },
};
