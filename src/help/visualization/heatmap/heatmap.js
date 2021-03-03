import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from '../../../routes/not-found';
import Main from './main/heatmap-main';
import Settings from './settings/settings';

const Heatmap = () => (
  <div>
    <h2>Dot plot/Heat map</h2>
    <Switch>
      <Route exact path="/help/visualization/heatmap" component={Main} />
      <Route path="/help/visualization/heatmap/settings" component={Settings} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default Heatmap;
