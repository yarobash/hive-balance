import express from 'express';
import frames from '../controllers/frames';

const router = express.Router();

router.post('/', frames.createFrame);
router.get('/', frames.getAllFrames);
router.get('/my', frames.getMyFrames);
router.get('/standard', frames.getStandardFrames);
router.get('/:frameId', frames.getFrame);
router.delete('/:frameId', frames.deleteFrame);
router.patch('/:frameId/title', frames.editFrameTitle);
router.patch('/:frameId/size', frames.editFrameSize);

export default router;
