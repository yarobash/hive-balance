import express from 'express';
import frames from '../controllers/frames';

const router = express.Router();

router.post('/', frames.createFrame);
router.get('/', frames.getAllFrames);

export default router;
