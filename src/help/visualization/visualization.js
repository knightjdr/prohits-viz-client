import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Heatmap from './heatmap/heatmap';
import NotFoundPage from '../../routes/not-found';

const Visualization = () => (
  <div>
    <h1>Visualization</h1>
    <Switch>
      <Route path="/help/visualization/heatmap" component={Heatmap} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default Visualization;
