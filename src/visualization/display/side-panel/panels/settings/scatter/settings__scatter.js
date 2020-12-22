import PropTypes from 'prop-types';
import React from 'react';

import Filter from './filter/filter-container';
import Image from './image/image-container';
import Reset from '../reset/reset';

const Settings = ({
  handleImageReset,
}) => (
  <div className="panel panel__settings">
    <Image />
    <Filter />
    <Reset handleImageReset={handleImageReset} />
  </div>
);

Settings.propTypes = {
  handleImageReset: PropTypes.func.isRequired,
};

export default Settings;
