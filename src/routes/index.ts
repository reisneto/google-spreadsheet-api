import { Router } from 'express';

import status from './status';
import defaultRoute from './default';

interface Routes {
  [index: string]: Router;
}

const routes: Routes = {
  status,
  defaultRoute,
};

export default routes;
