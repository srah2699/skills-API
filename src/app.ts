import express, { Application} from 'express';

export const app: Application = express();
app.use(express.json());

function main() {
  app.get('/livecheck', (req, res) => {
    res.status(200).send('Skills-API Good to go');
  });
}

main();
