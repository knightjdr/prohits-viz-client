import React from 'react';
import { useRoutes } from 'hookrouter';

import List from './list/list-container';
import Article from './article/article-container';
import NotFoundPage from '../routes/not-found';

const routes = {
  '/': () => <List />,
  '/:id': props => <Article {...props} />,
};

const NewsContainer = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
};

export default NewsContainer;
