import React from 'react';
import { useRoutes } from 'hookrouter';

import Load from './load/load-container';
import NotFoundPage from '../routes/not-found';

const routes = {
  '/': () => <Load />,
};

const VisualizationContainer = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
};

export default VisualizationContainer;
