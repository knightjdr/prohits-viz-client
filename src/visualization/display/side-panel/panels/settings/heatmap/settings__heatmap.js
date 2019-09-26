import PropTypes from 'prop-types';
import React from 'react';

import Basic from './basic';
import ColorPalette from './color-palette';

import './settings__heatmap.css';

const Settings = ({
  handleChange,
  settings,
}) => {
  const {
    cellSize,
    edgeColor,
    fillColor,
    imageType,
  } = settings;

  return (
    <div className="panel__settings">
      <Basic
        cellSize={cellSize}
        imageType={imageType}
        handleChange={handleChange}
      />
      <ColorPalette
        edgeColor={edgeColor}
        fillColor={fillColor}
        handleChange={handleChange}
      />
    </div>
  );
};

Settings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    cellSize: PropTypes.number.isRequired,
    edgeColor: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
  }).isRequired,
};

export default Settings;
