import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CC from './cc/cc';
import Correlation from './correlation/correlation';
import Dotplot from './dotplot/dotplot';
import InputFile from './input-file/input-file';
import Main from './main/analysis-main';
import NotFoundPage from '../../routes/not-found';
import SCV from './scv/scv';
import Specificity from './specificity/specificity';

const Analysis = () => (
  <div>
    <h1>Analysis</h1>
    <Switch>
      <Route exact path="/help/analysis" component={Main} />
      <Route path="/help/analysis/condition-condition" component={CC} />
      <Route path="/help/analysis/correlation" component={Correlation} />
      <Route path="/help/analysis/dotplot" component={Dotplot} />
      <Route path="/help/analysis/input-file" component={InputFile} />
      <Route path="/help/analysis/scv" component={SCV} />
      <Route path="/help/analysis/specificity" component={Specificity} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </div>
);

export default Analysis;
