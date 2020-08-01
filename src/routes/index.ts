import { Router } from 'express';

import about from './about';

interface Routes {
  [index: string]: Router;
}

const routes: Routes = {
  about,
};

export default routes;
