import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true,
  parameterLimit: 10000,
  limit: 1024 * 1024 * 10
}));

app.use('/', express.static('views/dist/'));



app.listen(1111, () => {
  console.log('Server started');
});
