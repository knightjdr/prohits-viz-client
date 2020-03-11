import PropTypes from 'prop-types';
import React from 'react';

const Visualization = ({
  routeContent,
}) => (
  <div>
    <h1>Visualization</h1>
    {routeContent}
  </div>
);

Visualization.defaultProps = {
  routeContent: null,
};

Visualization.propTypes = {
  routeContent: PropTypes.node,
};

export default Visualization;
