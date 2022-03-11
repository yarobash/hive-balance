export const userAnswer = (user: any) => ({
  name: user.name,
  email: user.email,
  passHash: user.passHash,
});
