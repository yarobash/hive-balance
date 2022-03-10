import express from 'express';
import apiaries from './../controllers/apiaries';

const router = express.Router();

router.post('/', apiaries.createApiary);
router.get('/', apiaries.getMyApiaries);

export default router;
