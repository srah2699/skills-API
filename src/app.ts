import express, { Application} from 'express';
const dotenv = require('dotenv').config();
import router from './routes/index';
import dbConnection from './configs/db';

export const app: Application = express();
app.use(express.json());

function main() {
  dbConnection(); 

  app.get('/livecheck', (req, res) => {
    res.status(200).send('Skills-API Good to go');
  });

  app.use('/api/v1', router.user) 
}

main();
