import React from 'react';
import { useSelector } from 'react-redux';

import Analysis from './analysis';

import { selectStateProperty } from '../../../state/selector/general';

const AnalysisContainer = () => {
  const activeTab = useSelector((state) => selectStateProperty(state, 'tabs', 'active'));
  const analysis = useSelector((state) => selectStateProperty(state, 'analysis', activeTab));

  return (
    <Analysis
      analysis={analysis}
      analysisName={activeTab}
    />
  );
};

export default AnalysisContainer;
