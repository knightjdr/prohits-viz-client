import PropTypes from 'prop-types';
import React from 'react';

import Poi from '../analysis/scatter/poi/poi-container';
import PointList from './point-list/point-list-container';

const Customization = ({
  customization,
}) => (
  <div className="panel panel__customization">
    <Poi />
    <PointList
      customization={customization}
    />
  </div>
);

Customization.propTypes = {
  customization: PropTypes.shape({}).isRequired,
};

export default Customization;
