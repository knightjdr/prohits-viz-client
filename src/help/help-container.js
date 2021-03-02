import React from 'react';
import { useRoutes, usePath } from 'hookrouter';

import Analysis from './analysis/analysis-container';
import Citation from './citation/citation';
import Help from './help';
import Main from './help-main';
import Privacy from './privacy/privacy';
import Visualization from './visualization/visualization-container';
import { linkOrder } from './links';

const routes = {
  '/': () => <Main />,
  '/analysis*': () => <Analysis />,
  '/citation': () => <Citation />,
  '/privacy': () => <Privacy />,
  '/visualization*': () => <Visualization />,
};

const HelpContainer = () => {
  const routeContent = useRoutes(routes);
  const path = usePath();
  const footerNavLinks = linkOrder[path];

  return (
    <Help
      footerNavLinks={footerNavLinks}
      routeContent={routeContent}
    />
  );
};

export default HelpContainer;
