import React from 'react';
import { useRoutes } from 'hookrouter';

import Process from './process/process-container';
import Load from './load/load-container';
import NotFoundPage from '../routes/not-found';

const routes = {
  '/': () => <Load />,
  '/:id/:filename': (props) => <Process {...props} />,
};

const VisualizationContainer = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
};

export default VisualizationContainer;
