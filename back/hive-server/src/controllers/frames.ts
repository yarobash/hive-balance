import frame from '../models/frame';
import { frameAnswer, framesAnswer } from '../utils/answers/frameAnswers';
import CustomError from '../utils/errors/CustomError';

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

  getMyFrames(req: any, res: any, next: any) {
    const owner = req.user._id;

    frame.getMyFrames(owner)
      .then((frames: any) => res.send(framesAnswer(frames)))
      .catch(next);
  },

  getStandardFrames(req: any, res: any, next: any) {
    frame.getStandardFrames()
      .then((frames: any) => res.send(framesAnswer(frames)))
      .catch(next);
  },

  getFrame(req: any, res: any, next: any) {
    const id = req.params.frameId;

    frame.getFrame(id)
      .then((frame: any) => res.send(frameAnswer(frame)))
      .catch(next);
  },

  deleteFrame(req: any, res: any, next: any) {
    const id = req.params.frameId;

    frame.getFrame(id)
      .then((frameToDel: any) => {
        if (frameToDel.type === 'standard') {
          next (new CustomError(401, 'Standrd frames can\'t be deleted'));
        }
        if (frameToDel.owner.toString() === req.user._id) {
          frame.deleteFrame(frameToDel._id)
            .then((deletedFrame: any) => res.send(frameAnswer(deletedFrame)));
        } else {
          next (new CustomError(401, 'Attempt to delete another\'s owner frame'));
        }
      })
      .catch(next);
  },

  editFrameTitle(req: any, res: any, next: any) {
    const id = req.params.frameId;
    const newTitle = req.body.title;

    frame.getFrame(id)
      .then((frameToEdit: any) => {
        if (frameToEdit.type === 'standard') {
          next (new CustomError(401, 'Standrd frames can\'t be edited'));
        }
        if (frameToEdit.owner.toString() === req.user._id) {
          frame.editFrameTitle(id, newTitle)
            .then((editedFrame: any) => res.send(frameAnswer(editedFrame)));
        } else {
          next (new CustomError(401, 'Attempt to edit another\'s owner frame'));
        }
      })
      .catch(next);
  },

  editFrameSize(req: any, res: any, next: any) {
    const id = req.params.frameId;
    const newWidth = req.body.width;
    const newHeight = req.body.height;

    frame.getFrame(id)
      .then((frameToEdit: any) => {
        if(frameToEdit.type === 'standard') {
          next (new CustomError(401, 'Standrd frames can\'t be edited'));
        }
        if (frameToEdit.owner.toString() === req.user._id) {
          frame.editFrameSize(id, newWidth, newHeight)
            .then((editedFrame: any) => res.send(frameAnswer(editedFrame)));
        } else {
          next (new CustomError(401, 'Attempt to edit another\'s owner frame'));
        }
      })
      .catch(next);
  },
};
