export const frameAnswer = (frame: any) => ({
  _id: frame._id,
  title: frame.title,
  type: frame.type,
  width: frame.width,
  height: frame.height,
  owner: frame.owner,
});

export const framesAnswer = (frames: []) => frames.map((frame: any) => frameAnswer(frame));
