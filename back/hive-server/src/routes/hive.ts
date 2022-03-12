import express from 'express';
import hives from '../controllers/hives';

const router = express.Router();

router.post('/', hives.createHive);

export default router;
