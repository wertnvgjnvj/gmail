import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';

const app = express();

app.use(cors(
  {
    origin:["https://deploy-mern-1whq.vercel.app"],
    methods:["POST", "GET"],
    credentials: true
  }
));
app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
