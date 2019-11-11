import React from 'react';

import AnalysisOptions from './options/options-container';
import Poi from './poi/poi-container';

import './analysis__heatmap.css';

const Analysis = () => (
  <div className="panel__analysis">
    <Poi />
    <AnalysisOptions />
  </div>
);

export default Analysis;
