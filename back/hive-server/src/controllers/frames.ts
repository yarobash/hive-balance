import frame from '../models/frame';
import { frameAnswer, framesAnswer } from '../utils/answers/frameAnswers';
import * as customErrors from '../utils/errors/CustomErrors';

export default {
  createFrame(req: any, res: any, next: any) {
    const owner = req.user._id ? req.user._id : '';
    const { title, type, width, height } = req.body;

    frame.createFrame(title, type, width, height, owner)
      .then((frame: any) => res.send(frameAnswer(frame)))
      .catch(next);
  },

  getAllFrames(req: any, res: any, next: any) {
    const owner = req.user._id;

    frame.getAllFrames(owner)
      .then((frames: any) => res.send(framesAnswer(frames)))
      .catch(next);
  },
};
