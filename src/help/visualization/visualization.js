import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CircHeatmap from './circheatmap/circheatmap';
import Heatmap from './heatmap/heatmap';
import InputFile from './input-file/input-file';
import Main from './main/visualization-main';
import NotFoundPage from '../../routes/not-found';
import Scatter from './scatter/scatter';

const Visualization = () => (
  <div>
    <h1>Visualization</h1>
    <Switch>
      <Route exact path="/help/visualization" component={Main} />
      <Route path="/help/visualization/circular-heatmap" component={CircHeatmap} />
      <Route path="/help/visualization/heatmap" component={Heatmap} />
      <Route path="/help/visualization/input-file" component={InputFile} />
      <Route path="/help/visualization/scatterplot" component={Scatter} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default Visualization;
