import React from 'react';
import { useSelector } from 'react-redux';

import Analysis from './analysis';
import { selectStateProperty } from '../../../../../state/selector/general';

const AnalysisContainer = () => {
  const imageType = useSelector((state) => selectStateProperty(state, 'parameters', 'imageType'));

  return (
    <Analysis
      imageType={imageType}
    />
  );
};

export default AnalysisContainer;
