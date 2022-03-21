import express from 'express';
import { routerApi } from './routes/index';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

routerApi(app);

app.listen(port, () => {
    console.log("Running port " + port);
});

export { app };