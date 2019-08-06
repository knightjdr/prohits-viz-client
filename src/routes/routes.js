import React, { lazy } from 'react';

import Home from '../home/home-container';

const Analyze = lazy(() => import('../analysis/analysis'));
const Help = lazy(() => import('../help/help-container'));
const News = lazy(() => import('../news/news-container'));
const Visualization = lazy(() => import('../visualization/visualization-container'));

const routes = {
  '/': () => <Home />,
  '/analysis': () => <Analyze />,
  '/help*': () => <Help />,
  '/news*': () => <News />,
  '/visualization*': () => <Visualization />,
};

export default routes;
