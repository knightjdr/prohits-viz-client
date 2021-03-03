import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dotplot from './dotplot/dotplot';
import InputFile from './input-file/input-file';
import Main from './main/analysis-main';
import NotFoundPage from '../../routes/not-found';

const Analysis = () => (
  <div>
    <h1>Analysis</h1>
    <Switch>
      <Route exact path="/help/analysis" component={Main} />
      <Route path="/help/analysis/dotplot" component={Dotplot} />
      <Route path="/help/analysis/input-file" component={InputFile} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default Analysis;
