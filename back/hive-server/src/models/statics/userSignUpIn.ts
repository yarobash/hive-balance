import bcrypt from 'bcrypt';

interface UserData {
  name: string;
  email: string;
  password: string;
}

export default {
  createUser(name, email, rawPassword) {
    return bcrypt.hash(rawPassword, 10)
      .then((password) => this.create({
        name, email, password,
      })
        .then((user) => user)
        .catch((err) => {
          return Promise.reject(new Error('bad user'));
        }));
  },
};
