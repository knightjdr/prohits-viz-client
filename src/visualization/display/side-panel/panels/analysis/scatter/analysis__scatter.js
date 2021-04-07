import React from 'react';

import AnalysisOptions from '../options/options-container';
import Poi from './poi/poi-container';

const Analysis = () => (
  <div className="panel">
    <Poi />
    <AnalysisOptions
      helpLink="/help/visualization/scatterplot#selections-analysis"
    />
  </div>
);

export default Analysis;
