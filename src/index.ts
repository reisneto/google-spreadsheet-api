import express from 'express';
import routes from './routes';
import { applyMiddlewares } from './middlewares';

const app = express();

applyMiddlewares(app);

app.use('/v1/', routes.status);
app.use(routes.defaultRoute);
app.listen(3333);

export default app;
