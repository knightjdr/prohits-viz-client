import React from 'react';

import Analysis from '../analysis/analysis-container';
import CircHeatmap from '../circheatmap/circheatmap-container';
import Heatmap from '../heatmap/heatmap-container';
import Scatter from '../scatter/scatter-container';

const getAnalysisContent = () => <Analysis />;

const getImageContent = (imageType) => {
  if (imageType === 'circheatmap') {
    return <CircHeatmap />;
  } if (imageType === 'dotplot' || imageType === 'heatmap') {
    return <Heatmap />;
  } if (imageType === 'scatter') {
    return <Scatter />;
  }
  return null;
};

const getTabComponent = (tabType, imageType) => (
  tabType === 'snapshot' ? getImageContent(imageType) : getAnalysisContent()
);

export default getTabComponent;
