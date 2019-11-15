import PropTypes from 'prop-types';
import React from 'react';

import ColorPalette from './color/color-palette';
import Filter from './filter/filter-container';
import Image from './image/image-container';
import Reset from '../reset/reset';

import './settings__heatmap.css';

const Settings = ({
  handleChange,
  handleImageReset,
  settings,
}) => {
  const {
    edgeColor,
    fillColor,
    invertColor,
  } = settings;

  return (
    <div className="panel panel__settings">
      <Image
        handleChange={handleChange}
      />
      <ColorPalette
        edgeColor={edgeColor}
        fillColor={fillColor}
        handleChange={handleChange}
        invertColor={invertColor}
      />
      <Filter />
      <Reset
        handleImageReset={handleImageReset}
      />
    </div>
  );
};

Settings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleImageReset: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    edgeColor: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
    invertColor: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Settings;
