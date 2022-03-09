export const userAnswer = (user: any) => ({
  name: user.name,
  email: user.email,
  passHash: user.passHash,
});

export const apiaryAnswer = (apiary: any) => ({
  title: apiary.title,
  owner: apiary.owner,
  coordinates: apiary.coordinates,
});
