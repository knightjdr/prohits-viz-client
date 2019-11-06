import PropTypes from 'prop-types';
import React from 'react';

import Heatmap from './heatmap/analysis__heatmap';

const Analysis = ({
  imageType,
}) => {
  switch (imageType) {
    case 'dotplot':
      return <Heatmap />;
    case 'heatmap':
      return <Heatmap />;
    default:
      return <Heatmap />;
  }
};

Analysis.propTypes = {
  imageType: PropTypes.string.isRequired,
};

export default Analysis;
