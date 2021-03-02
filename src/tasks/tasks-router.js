import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from '../routes/not-found';
import Tasks from './tasks-container';

const TasksRouter = () => (
  <Switch>
    <Route exact path="/tasks" component={Tasks} />
    <Route path="/tasks/:id" component={Tasks} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default TasksRouter;
