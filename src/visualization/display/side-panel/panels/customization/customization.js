import PropTypes from 'prop-types';
import React from 'react';

import PointList from './point-list/point-list';

const Customization = ({
  customization,
  labelOrder,
}) => (
  <div className="panel panel__customization">
    <PointList
      customization={customization}
      labelOrder={labelOrder}
    />
  </div>
);

Customization.propTypes = {
  customization: PropTypes.shape({}).isRequired,
  labelOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Customization;
