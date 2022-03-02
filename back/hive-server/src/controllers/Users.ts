import jwt from 'jsonwebtoken';
import user from './../models/user';
import { userAnswer } from '../utils/answers';

export default {
  createUser(req: any, res: any, next: any) {
    const {
      name, email, password,
    } = req.body;

    user.createUser(name, email, password)
      .then((user: any) => res.send(userAnswer(user)))
      .catch(next);
  },
}
