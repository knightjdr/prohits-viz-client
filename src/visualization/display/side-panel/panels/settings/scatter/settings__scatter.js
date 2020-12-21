import PropTypes from 'prop-types';
import React from 'react';

import Image from './image/image-container';
import Reset from '../reset/reset';

const Settings = ({
  handleImageReset,
}) => (
  <div className="panel panel__settings">
    <Image />
    <Reset handleImageReset={handleImageReset} />
  </div>
);

Settings.propTypes = {
  handleImageReset: PropTypes.func.isRequired,
};

export default Settings;
