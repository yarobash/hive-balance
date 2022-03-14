export const hiveAnswer = (hive: any) => ({
  _id: hive._id,
  title: hive.title,
  apiary: hive.apiary,
  owner: hive.owner,
  frames: hive.frames,
});

export const hivesAnswer = (hives: []) => hives.map((hive: any) => hiveAnswer(hive));
