import React from 'react';
import { useRoutes } from 'hookrouter';

import NotFoundPage from '../routes/not-found';
import Tasks from './tasks-container';

const routes = {
  '/': () => <Tasks />,
  '/:id': props => <Tasks {...props} />,
};

const TasksRouter = () => {
  const routeResult = useRoutes(routes);

  return routeResult || <NotFoundPage />;
};

export default TasksRouter;
