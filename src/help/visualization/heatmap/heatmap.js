import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from '../../../routes/not-found';
import Settings from './settings/settings';

const Heatmap = () => (
  <div>
    <h2>Dot plot/Heat map</h2>
    <Switch>
      <Route path="/help/visualization/settings/heatmap" component={Settings} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default Heatmap;
