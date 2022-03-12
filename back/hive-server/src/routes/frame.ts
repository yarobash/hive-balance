import express from 'express';
import frames from '../controllers/frames';

const router = express.Router();

router.post('/', frames.createFrame);
router.get('/', frames.getAllFrames);
router.get('/my', frames.getMyFrames);
router.get('/standard', frames.getStandardFrames);

export default router;
