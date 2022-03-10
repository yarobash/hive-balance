import apiary from './../models/apiary';
import { apiaryAnswer, apiariesAnswer } from './../utils/answers';

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
}
