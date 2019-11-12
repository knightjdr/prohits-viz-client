import React from 'react';

import Heatmap from '../heatmap/heatmap-container';

const getAnalysisContent = () => {};

const getImageContent = (imageType) => {
  switch (imageType) {
    case 'dotplot':
      return <Heatmap />;
    case 'heatmap':
      return <Heatmap />;
    default:
      return null;
  }
};

const getTabComponent = (tabType, imageType) => (
  tabType === 'snapshot' ? getImageContent(imageType) : getAnalysisContent()
);

export default getTabComponent;
