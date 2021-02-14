import express from 'express';
import router from './router/api'
import cors from 'cors'
import bodyparser from 'body-parser'
const app = express();
const port = 3005;
app.get('/health', (req, res) => {
  res.send('I am healthy');
});
app.listen(port, () => {

  return console.log(`server is listening on ${port}`);
}).on("error", (err) => {
  return console.log(`server is listening on ${err.message}`);
});
app.use(cors({ origin: '*' }));
app.use(bodyparser.json());
app.use(router);
