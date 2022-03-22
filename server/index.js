import express from 'express';
import { routerApi } from './routes/index';
import { errorHandler, logErrors } from './middleware/error.handler'
import cors from 'cors';

const app = express();
const port = 3001;
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Running port " + port);
});

export { app };
