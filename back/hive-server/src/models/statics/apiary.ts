import * as customErrors from '../../utils/errors/CustomErrors';

export default {
  createApiary(title: string, owner: string, coordinates?: []): any {
    this.create({title, owner, coordinates})
      .then((apiary: any) => apiary)
      .catch((err:any) => Promise.reject(new customErrors.Error400('something wrong with apiary')));
  },
};
