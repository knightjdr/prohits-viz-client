import PropTypes from 'prop-types';
import React from 'react';

import Heatmap from './heatmap/settings__heatmap-container';
import Scatter from './scatter/settings__scatter-container';

import './settings.css';

const Settings = ({
  imageType,
}) => {
  if (imageType === 'dotplot' || imageType === 'heatmap') {
    return <Heatmap />;
  } if (imageType === 'scatter') {
    return <Scatter />;
  }
  return null;
};

Settings.propTypes = {
  imageType: PropTypes.string.isRequired,
};

export default Settings;
