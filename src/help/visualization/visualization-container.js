import React from 'react';
import { useRoutes } from 'hookrouter';

import Heatmap from './heatmap/heatmap-container';
import Visualization from './visualization';

const routes = {
  '/heatmap*': () => <Heatmap />,
};

const HelpContainer = () => {
  const routeContent = useRoutes(routes);

  return (
    <Visualization
      routeContent={routeContent}
    />
  );
};

export default HelpContainer;
