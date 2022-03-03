import bcrypt from 'bcrypt';
import { CustomError400 } from '../../utils/errors/CustomErrors';

export default {
  createUser(name: string, email: string, rawPassword: string): any {
    return bcrypt.hash(rawPassword, 10)
      .then((password) => this.create({
        name, email, password,
      })
        .then((user: any) => user)
        .catch((err: any) => {
          console.log(err);
          return Promise.reject(new CustomError400('sfsdfsdfsd'));
        }));
  },
};
