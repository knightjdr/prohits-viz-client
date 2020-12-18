import PropTypes from 'prop-types';
import React from 'react';

import Display from './display/display-container';
import Reset from '../reset/reset';

const Settings = ({
  handleChange,
  handleImageReset,
}) => (
  <div className="panel panel__settings">
    <Display
      handleChange={handleChange}
    />
    <Reset
      handleImageReset={handleImageReset}
    />
  </div>
);

Settings.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleImageReset: PropTypes.func.isRequired,
};

export default Settings;
