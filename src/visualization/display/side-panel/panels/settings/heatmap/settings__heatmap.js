import PropTypes from 'prop-types';
import React from 'react';

import Basic from './basic';

import './settings__heatmap.css';

const Settings = ({
  handleChange,
  settings,
}) => {
  const {
    cellSize,
    imageType,
  } = settings;

  return (
    <div className="panel__settings">
      <Basic
        cellSize={cellSize}
        imageType={imageType}
        handleChange={handleChange}
      />
    </div>
  );
};

Settings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    cellSize: PropTypes.number.isRequired,
    imageType: PropTypes.string.isRequired,
  }).isRequired,
};

export default Settings;
