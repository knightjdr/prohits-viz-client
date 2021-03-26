import PropTypes from 'prop-types';
import React from 'react';

import Image from './image/image-container';
import Filter from './filter/filter-container';
import Reset from '../common/reset/reset';

const Settings = ({
  handleReset,
}) => (
  <div className="panel panel__settings">
    <Image />
    <Filter />
    <Reset
      handleReset={handleReset}
      helpLink="/help/visualization/circular-heatmap#settings-reset"
    />
  </div>
);

Settings.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default Settings;
