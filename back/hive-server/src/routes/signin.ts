import express from 'express';
import users from '../controllers/Users';

const router = express.Router();

router.post('/', users.login);

export default router;
