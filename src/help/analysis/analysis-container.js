import React from 'react';
import { useRoutes } from 'hookrouter';

import Analysis from './analysis';
import InputFile from './input-file/input-file';
import Main from './main/analysis-main';

const routes = {
  '/': () => <Main />,
  '/input-file': () => <InputFile />,
};

const HelpContainer = () => {
  const routeContent = useRoutes(routes);

  return (
    <Analysis
      routeContent={routeContent}
    />
  );
};

export default HelpContainer;
