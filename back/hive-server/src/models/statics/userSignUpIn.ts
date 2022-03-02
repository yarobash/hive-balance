import bcrypt from 'bcrypt';

export default {
  createUser(name: string, email: string, rawPassword: string) {
    return bcrypt.hash(rawPassword, 10)
      .then((password) => this.create({
        name, email, password,
      })
        .then((user: any) => user)
        .catch((err: any) => {
          return Promise.reject(err);
        }));
  },
};
