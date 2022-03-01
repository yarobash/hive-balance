import express from 'express';
import mongoose from 'mongoose';
import createUser from './routes/signup.ts';

const PORT = 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/hivedb');

app.use(express.json());
app.use('/signup', createUser);

app.listen(PORT);
