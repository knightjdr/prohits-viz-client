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
  } = settings;

  return (
    <div className="panel__settings">
      <Basic
        cellSize={cellSize}
        handleChange={handleChange}
      />
    </div>
  );
};

Settings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    cellSize: PropTypes.number.isRequired,
  }).isRequired,
};

export default Settings;
