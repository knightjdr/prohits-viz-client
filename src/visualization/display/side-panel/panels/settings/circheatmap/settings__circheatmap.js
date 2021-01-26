import PropTypes from 'prop-types';
import React from 'react';

import Image from './image/image-container';
import Reset from '../reset/reset';

const Settings = ({
  handleReset,
}) => (
  <div className="panel panel__settings">
    <Image />
    <Reset
      handleReset={handleReset}
    />
  </div>
);

Settings.propTypes = {
  handleReset: PropTypes.func.isRequired,
};

export default Settings;
