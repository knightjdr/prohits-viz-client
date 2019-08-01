import React from 'react';
import { useRoutes } from 'hookrouter';

import NewsList from './news-list/news-list-container';
// import NewsItem from './news-item/news-item-container';
import NotFoundPage from '../routes/not-found';

const routes = {
  '/': () => <NewsList />,
  // '/:id': ({ id }) => <NewsItem id={id} />,
};

const NewsContainer = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
};

export default NewsContainer;
