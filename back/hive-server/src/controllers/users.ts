import jwt from 'jsonwebtoken';
import user from './../models/user';
import { userAnswer } from '../utils/answers/userAnswers';

export default {
  createUser(req: any, res: any, next: any) {
    const {
      name, email, password,
    } = req.body;

    user.createUser(name, email, password)
      .then((user: any) => res.send(userAnswer(user)))
      .catch(next);
  },

  login(req: any, res: any, next: any) {
    const {
      email, password,
    } = req.body;

    user.findUserByCreds(email, password)
      .then((credits: any) => {
        const token: string = jwt.sign({ _id: credits._id }, process.env.SECRET_KEY, { expiresIn: '7d' }); res.cookie('token', token, { maxAge: 1000 * 3600 * 24 * 7, httpOnly: true });
        res.send({ token });
      })
      .catch(next);
  },
}
