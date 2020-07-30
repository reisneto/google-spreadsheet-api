import express from 'express';
import cors from 'cors';
import routes from './routes';
import { applyMiddlewares } from './middlewares';

const app = express();

app.use(cors());

applyMiddlewares(app);

Object.keys(routes).forEach((routeName) => {
  app.use(`/v1/${routeName}`, routes[routeName]);
});

app.listen(3333);

export default app;
