import express from 'express';
import mongoose from 'mongoose';
import createUser from './routes/signup';
import login from './routes/signin';
import apiary from './routes/apiary';
import frame from './routes/frame';
import hive from './routes/hive';
import errorHandler from './middlewares/errors';
import auth from './middlewares/auth';
const PORT = 3000;
const app = express();

//mongoose connect
mongoose.connect('mongodb://backApp:Q0c77%25%233CNdn@cloudapiary.ru:27017/hive?authSource=hive');

app.use(express.json());
app.use('/signup', createUser);
app.use('/signin', login);
app.use(auth);
app.use('/apiary', apiary);
app.use('/frame', frame);
app.use('/hive', hive);
app.use(errorHandler);
app.listen(PORT);
