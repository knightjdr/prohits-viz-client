import PropTypes from 'prop-types';
import React from 'react';

import Heatmap from './heatmap/markup__heatmap';
import Scatter from './scatter/markup__scatter-container';

import './markup.css';

const Markup = ({
  imageType,
}) => {
  if (imageType === 'dotplot' || imageType === 'heatmap') {
    return <Heatmap />;
  } if (imageType === 'scatter') {
    return <Scatter />;
  }
  return null;
};

Markup.propTypes = {
  imageType: PropTypes.string.isRequired,
};

export default Markup;
