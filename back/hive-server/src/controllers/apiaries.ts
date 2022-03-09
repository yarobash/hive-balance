import apiary from './../models/apiary';
import { apiaryAnswer } from './../utils/answers';

export default {
  createApiary(req: any, res: any, next: any) {
    const { title, owner, coordinates } = req.body;

    apiary.createApiary(title, owner, coordinates)
      .then((apiary: any) => res.send(apiaryAnswer(apiary)))
      .catch(next);
  },
}
