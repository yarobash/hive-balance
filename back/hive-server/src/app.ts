import express from 'express';
import mongoose from 'mongoose';
import createUser from './routes/signup';

const PORT = 3000;
const app = express();

//mongoose connect

app.use(express.json());
app.use('/signup', createUser);

app.listen(PORT);
