import React from 'react';
import { useRoutes } from 'hookrouter';

import Heatmap from './heatmap';
import Settings from './settings/settings';

const routes = {
  '/settings': () => <Settings />,
};

const HelpContainer = () => {
  const routeContent = useRoutes(routes);

  return (
    <Heatmap
      routeContent={routeContent}
    />
  );
};

export default HelpContainer;
