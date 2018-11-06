import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport';

import keys from './config/keys';
import users from './routes/api/users';
import profile from './routes/api/profile';
import posts from './routes/api/posts';
import passportConfig from './config/passport';

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = keys.mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB connecting'))
  .catch(err => console.log(err));

app.use(passport.initialize());

passportConfig(passport);

app.get('/', (req, res) => res.send('Hello'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
