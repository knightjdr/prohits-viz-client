import PropTypes from 'prop-types';
import React from 'react';

import CircHeatmap from './circheatmap/analysis__circheatmap';
import Heatmap from './heatmap/analysis__heatmap';
import Scatter from './scatter/analysis__scatter';

const Analysis = ({
  imageType,
}) => {
  if (imageType === 'circheatmap') {
    return <CircHeatmap />;
  } if (imageType === 'dotplot' || imageType === 'heatmap') {
    return <Heatmap />;
  } if (imageType === 'scatter') {
    return <Scatter />;
  }
  return null;
};

Analysis.propTypes = {
  imageType: PropTypes.string.isRequired,
};

export default Analysis;
