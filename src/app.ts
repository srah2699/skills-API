import express, { Application} from 'express';
import router from './routes/index';
import dbConnection from './configs/db';
const dotenv = require('dotenv').config();
import cookieParser from 'cookie-parser';

export const app: Application = express();
app.use(express.json());
app.use(cookieParser())


function main() {
  dbConnection(); 

  app.get('/livecheck', (req, res) => {
    res.status(200).send('Skills-API Good to go');
  });

  app.use('/api/v1', [router.user, router.skills]) 
}

main();
