import express from 'express';
import apiaries from './../controllers/apiaries';

const router = express.Router();

router.post('/', apiaries.createApiary);
router.get('/', apiaries.getMyApiaries);
router.get('/:apiaryId', apiaries.getApiary);
router.delete('/:apiaryId', apiaries.deleteApiary);
router.patch('/:apiaryId/title', apiaries.editApiaryTitle);

export default router;
