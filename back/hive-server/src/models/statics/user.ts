import bcrypt from 'bcrypt';
import * as customErrors from '../../utils/errors/CustomErrors';

export default {
  createUser(name: string, email: string, rawPassword: string): any {
    if (!rawPassword) return Promise.reject(new customErrors.Error400('Path `password` is required'));
    return bcrypt.hash(rawPassword, 10)
      .then((password) => this.create({
        name, email, password,
      })
        .then((user: any) => user)
        .catch((err: any) => {
          if (err.code === 11000) return Promise.reject(new customErrors.Error409('Duplicate email error'));
          const fullErrMsg: string = Object.keys(err.errors).reduce((str, e, i, a) => {
            if (i < a.length - 1) return `${str}${err.errors[e].message}, `;
            return `${str}${err.errors[e].message}`;
          }, '');
          return Promise.reject(new customErrors.Error400(fullErrMsg));
        }));
  },

  findUserByCreds(email: string, password: string) {
    if (!password || !email) return Promise.reject(new customErrors.Error401('Email or password is invalid'));
    return this.findOne({ email }).select('+password')
      .orFail(new customErrors.Error401('Email or password is invalid'))
      .then((credits: any) => bcrypt.compare(password, credits.password)
        .then((res) => {
          if (!res) return Promise.reject(new customErrors.Error401('Email or password is invalid'));
          return credits;
        }))
      .catch((err: any) => Promise.reject(err));
  },
};
