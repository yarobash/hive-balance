import express from 'express';
import apiaries from './../controllers/apiaries';

const router = express.Router();

router.post('/', apiaries.createApiary);

export default router;
