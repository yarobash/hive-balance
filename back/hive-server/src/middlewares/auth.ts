import jwt from 'jsonwebtoken';
import CustomError from '../utils/errors/CustomError';

export default (req: any, res: any, next: any) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next (new CustomError(401, 'Not authorized user'));
  }

  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    payload = jwt.verify(token, 'big-secret-and-very-big-secret');
  } catch (err) {
    next(new CustomError(401, 'Not authorized user'));
  }
  req.user = payload;
  next();
};
