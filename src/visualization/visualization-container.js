import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Process from './process/process-container';
import Load from './load/load-container';
import NotFoundPage from '../routes/not-found';

const VisualizationContainer = () => (
  <Switch>
    <Route exact path="/visualization" component={Load} />
    <Route path="/visualization/:id/:filename" component={Process} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default VisualizationContainer;
