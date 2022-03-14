import express from 'express';
import hives from '../controllers/hives';

const router = express.Router();

router.post('/', hives.createHive);
router.get('/:hiveId', hives.getHiveById);
router.get('/apiary/:apiaryId', hives.getHivesByApiaryId);
router.patch('/:hiveId', hives.updateHiveTitle);

export default router;
