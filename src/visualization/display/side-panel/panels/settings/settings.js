import PropTypes from 'prop-types';
import React from 'react';

import Heatmap from './heatmap/settings__heatmap-container';

const Settings = ({
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

Settings.propTypes = {
  imageType: PropTypes.string.isRequired,
};

export default Settings;
