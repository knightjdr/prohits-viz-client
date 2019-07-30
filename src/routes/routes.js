import React, { lazy } from 'react';

import Home from '../home/home-container';

const Analyze = lazy(() => import('../analysis/analysis'));

const routes = {
  '/': () => <Home />,
  '/analysis': () => <Analyze />,
};

export default routes;
