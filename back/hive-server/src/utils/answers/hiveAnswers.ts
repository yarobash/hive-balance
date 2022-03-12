export const hiveAnswer = (hive: any) => ({
  _id: hive._id,
  title: hive.title,
  frames: hive.frames,
});

export const hivesAnswer = (hives: []) => hives.map((hive: any) => hiveAnswer(hive));
