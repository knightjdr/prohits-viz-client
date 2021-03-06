import PropTypes from 'prop-types';
import React from 'react';

import Filter from './filter/filter-container';
import Image from './image/image-container';
import Reset from '../common/reset/reset';

const Settings = ({
  handleReset,
  handleTransformationReset,
}) => (
  <div className="panel panel__settings">
    <Image />
    <Filter />
    <Reset
      handleReset={handleReset}
      handleTransformationReset={handleTransformationReset}
      helpLink="/help/visualization/scatterplot#settings-reset"
      resetText="Reset settings, position and zoom"
    />
  </div>
);

Settings.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleTransformationReset: PropTypes.func.isRequired,
};

export default Settings;
