import PropTypes from 'prop-types';
import React from 'react';

import Basic from './basic';
import ColorPalette from './color-palette';
import Filters from './filters';
import Reset from '../reset/reset';

import './settings__heatmap.css';

const Settings = ({
  columns,
  handleChange,
  handleChangeAbundanceCap,
  handleChangeMinAbundance,
  handleChangePrimaryFilter,
  handleChangeSecondaryFilter,
  handleFilter,
  handleImageReset,
  settings,
}) => {
  const {
    abundanceCap,
    cellSize,
    edgeColor,
    fillColor,
    filterBy,
    imageType,
    invertColor,
    minAbundance,
    primaryFilter,
    removeEmptyColumns,
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
        columns={columns}
        filterBy={filterBy}
        handleChangeAbundanceCap={handleChangeAbundanceCap}
        handleChangeMinAbundance={handleChangeMinAbundance}
        handleChangePrimaryFilter={handleChangePrimaryFilter}
        handleChangeSecondaryFilter={handleChangeSecondaryFilter}
        handleFilter={handleFilter}
        minAbundance={minAbundance}
        primaryFilter={primaryFilter}
        removeEmptyColumns={removeEmptyColumns}
        secondaryFilter={secondaryFilter}
      />
      <Reset
        handleImageReset={handleImageReset}
      />
    </div>
  );
};

Settings.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeAbundanceCap: PropTypes.func.isRequired,
  handleChangeMinAbundance: PropTypes.func.isRequired,
  handleChangePrimaryFilter: PropTypes.func.isRequired,
  handleChangeSecondaryFilter: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleImageReset: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    abundanceCap: PropTypes.number.isRequired,
    cellSize: PropTypes.number.isRequired,
    edgeColor: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired,
    filterBy: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    invertColor: PropTypes.bool.isRequired,
    minAbundance: PropTypes.number.isRequired,
    primaryFilter: PropTypes.number.isRequired,
    removeEmptyColumns: PropTypes.bool.isRequired,
    secondaryFilter: PropTypes.number.isRequired,
  }).isRequired,
};

export default Settings;
