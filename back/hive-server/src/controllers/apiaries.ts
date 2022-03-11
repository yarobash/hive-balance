import apiary from './../models/apiary';
import { apiaryAnswer, apiariesAnswer } from './../utils/answers';
import * as customErrors from '../utils/errors/CustomErrors';

export default {
  createApiary(req: any, res: any, next: any) {
    const owner = req.user._id;
    const { title, coordinates } = req.body;

    apiary.createApiary(title, owner, coordinates)
      .then((apiary: any) => res.send(apiaryAnswer(apiary)))
      .catch(next);
  },

  getMyApiaries(req: any, res: any, next: any) {
    const userId = req.user._id;
    apiary.getMyApiaries(userId)
      .then((apiaries: any) => res.send(apiariesAnswer(apiaries)))
      .catch(next);
  },

  getApiary(req: any, res: any, next: any) {
    const apiaryId = req.params.apiaryId;
    apiary.getApiary(apiaryId)
      .then((apiary: any) => {
        if (apiary.owner.toString() !== req.user._id) {
          next(new customErrors.Error401('Attempt to get another\'s owner apiary'));
        } else {
          res.send(apiaryAnswer(apiary));
        }
      })
      .catch(next);
  },

  deleteApiary(req: any, res: any, next: any) {
    const apiaryId = req.params.apiaryId;
    apiary.getApiary(apiaryId)
      .then((apiaryToDel: any) => {
        if (apiaryToDel.owner.toString() === req.user._id) {
          apiary.deleteApiary(apiaryToDel._id)
            .then((deletedApiary: any) => res.send(apiaryAnswer(deletedApiary)));
        } else {
          next (new customErrors.Error401('Attempt to delete another\'s owner apiary'));
        }
      })
      .catch(next);
  },
  
  editApiaryTitle(req: any, res: any, next: any) {
    const apiaryId = req.params.apiaryId;
    apiary.getApiary(apiaryId)
      .then((apiaryToEdit: any) => {
        if (apiaryToEdit.owner.toString() === req.user._id) {
          apiary.editApiaryTitle(apiaryId, req.body.title)
            .then((editedApiary: any) => res.send(apiaryAnswer(editedApiary)));
        } else {
          next (new customErrors.Error401('Attempt to edit another\'s owner apiary'));
        }
      })
      .catch(next);
  },

  editApiaryCoordinates(req: any, res: any, next: any) {
    const apiaryId = req.params.apiaryId;
    apiary.getApiary(apiaryId)
      .then((apiaryToEdit: any) => {
        if (apiaryToEdit.owner.toString() === req.user._id) {
          apiary.editApiaryCoordinates(apiaryId, req.body.coordinates)
            .then((editedApiary: any) => res.send(apiaryAnswer(editedApiary)))
            .catch((err: any) => next(err));
        } else {
          next (new customErrors.Error401('Attempt to edit another\'s owner apiary'));
        }
      })
      .catch(next);
  },
}
