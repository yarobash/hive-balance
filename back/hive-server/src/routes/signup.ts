import express from 'express';
import users from '../controllers/Users';

const router = express.Router();

router.post('/', users.createUser);

export default router;
