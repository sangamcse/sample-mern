import path from 'path';
import express from 'express';

import index from '../index';
import devBundle from './devBundle';
import connection from './connection';

import carsRouter from './routes/cars';

const app = express();
if (process.env.NODE_ENV === 'development') {
  devBundle.compile(app);
}

const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.use('/api', carsRouter);

app.get('/', (req, res) => {
  res.status(200).send(index());
});

let port = process.env.PORT || 8000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', port);
});

try {
  connection();
} catch (e) {
  console.log(e);
}
