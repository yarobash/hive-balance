import express from 'express';
import userModel from '../models/user';
import Users from '../controllers/Users';

const users = new Users(userModel);
const router = express.Router();

router.post('/', users.createUser.bind(users));

export default router;
