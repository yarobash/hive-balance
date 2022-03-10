import jwt from 'jsonwebtoken';
import { Error401 } from '../utils/errors/CustomErrors';

export default (req: any, res: any, next: any) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next (new Error401('Not authorized user'));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    payload = jwt.verify(token, 'big-secret-and-very-big-secret');
  } catch (err) {
    next(new Error401('Not authorized user'));
  }
  req.user = payload;
  next();
};
