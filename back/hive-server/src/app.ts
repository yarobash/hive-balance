import express from 'express';
import mongoose from 'mongoose';
import createUser from './routes/signup';
import errorHandler from './middlewares/errors';
const PORT = 3000;
const app = express();

//mongoose connect

app.use(express.json());
app.use('/signup', createUser);
app.use(errorHandler);
app.listen(PORT);
