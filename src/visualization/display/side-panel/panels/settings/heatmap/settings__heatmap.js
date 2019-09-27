import PropTypes from 'prop-types';
import React from 'react';

import Basic from './basic';
import ColorPalette from './color-palette';
import Filters from './filters';
import Reset from '../reset/reset';

import './settings__heatmap.css';

const Settings = ({
  handleChange,
  handleImageReset,
  handleSettingReset,
  settings,
}) => {
  const {
    abundanceCap,
    cellSize,
    edgeColor,
    fillColor,
    imageType,
    invertColor,
    minAbundance,
    primaryFilter,
    secondaryFilter,
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
        invertColor={invertColor}
      />
      <Filters
        abundanceCap={abundanceCap}
        handleChange={handleChange}
        minAbundance={minAbundance}
        primaryFilter={primaryFilter}
        secondaryFilter={secondaryFilter}
      />
      <Reset
        handleImageReset={handleImageReset}
        handleSettingReset={handleSettingReset}
      />
    </div>
  );
};

Settings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleImageReset: PropTypes.func.isRequired,
  handleSettingReset: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    abundanceCap: PropTypes.number.isRequired,
    cellSize: PropTypes.number.isRequired,
    edgeColor: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    invertColor: PropTypes.bool.isRequired,
    minAbundance: PropTypes.number.isRequired,
    primaryFilter: PropTypes.number.isRequired,
    secondaryFilter: PropTypes.number.isRequired,
  }).isRequired,
};

export default Settings;
