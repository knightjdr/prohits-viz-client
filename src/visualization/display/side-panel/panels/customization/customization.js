import PropTypes from 'prop-types';
import React from 'react';

import PointList from './point-list/point-list-container';

const Customization = ({
  customization,
}) => (
  <div className="panel panel__customization">
    <PointList
      customization={customization}
    />
  </div>
);

Customization.propTypes = {
  customization: PropTypes.shape({}).isRequired,
};

export default Customization;
