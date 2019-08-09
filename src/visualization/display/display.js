import PropTypes from 'prop-types';
import React from 'react';

import Heatmap from './heatmap/heatmap-container';
import SidePanel from './side-panel/side-panel-container';

import './display.css';

const content = (imageType) => {
  switch (imageType) {
    case 'dotplot':
      return <Heatmap />;
    case 'heatmap':
      return <Heatmap />;
    default:
      return null;
  }
};

const Display = ({
  imageType,
}) => (
  <div className="display">
    {content(imageType)}
    <SidePanel />
  </div>
);

Display.propTypes = {
  imageType: PropTypes.string.isRequired,
};

export default Display;
