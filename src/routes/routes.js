import React, { lazy } from 'react';

import Home from '../home/home-container';

const Analyze = lazy(() => import('../analysis/analysis-container'));
const Help = lazy(() => import('../help/help-container'));
const News = lazy(() => import('../news/news-container'));
const Tasks = lazy(() => import('../tasks/tasks-router'));
const Visualization = lazy(() => import('../visualization/visualization-container'));

const routes = {
  '/': () => <Home />,
  '/analysis': () => <Analyze />,
  '/help*': () => <Help />,
  '/news*': () => <News />,
  '/tasks*': () => <Tasks />,
  '/visualization*': () => <Visualization />,
};

export default routes;
