import * as customErrors from '../../utils/errors/CustomErrors';

const fullErrMsg = (err: any) => {
  return Object.keys(err.errors).reduce((str, e, i, a) => {
    if (i < a.length - 1) return `${str}${err.errors[e].message}, `;
    return `${str}${err.errors[e].message}`;
  }, '');
};

export default {
  createApiary(title: string, owner: string, coordinates?: []): any {
    return this.create({title, owner, coordinates})
      .then((apiary: any) => apiary)
      .catch((err:any) => { 
        return Promise.reject(new customErrors.Error400(fullErrMsg(err)))
      });
  },

  getMyApiaries(userId: string) {
    return this.find({ owner: userId })
      .orFail(new customErrors.Error404(`User: ${userId} doesn't exist`))
      .then((apiaries: any) => apiaries)
      .catch((err: any) => Promise.reject(err));
  },

  getApiary(apiaryId: string) {
    return this.findOne({ _id: apiaryId })
      .orFail(new customErrors.Error404(`Apiary: ${apiaryId} doesn't exist`))
      .then((apiary: any) => apiary)
      .catch((err: any) => Promise.reject(err));
  },

  deleteApiary(apiaryId: string) {
    return this.findByIdAndRemove(apiaryId)
      .orFail(new customErrors.Error404('Entity to delete not found'))
      .then((apiary: any) => apiary)
      .catch((err: any) => Promise.reject(err));
  },

  editApiaryTitle(apiaryId: string, title: string) {
    return this.findByIdAndUpdate(
      apiaryId,
      { $set: { title: title } },
      { new: true },
    )
      .orFail(new customErrors.Error404(`Apiary: ${apiaryId} doesn't exist`))
      .then((apiary: any) => apiary)
      .catch((err: any) => Promise.reject(err));
  },

  editApiaryCoordinates(apiaryId: string, newCoordinates: [number]) {
     return this.findByIdAndUpdate(
       apiaryId,
       { $set: { coordinates: newCoordinates } },
       { new: true, runValidators: true },
     )
       .orFail( new customErrors.Error404(`Apiary: ${apiaryId} doesn't exist`))
       .then((apiary: any) => apiary)
       .catch((err: any) => Promise.reject(new customErrors.Error401(fullErrMsg(err))));
  },
};
