import PropTypes from 'prop-types';
import React from 'react';

const Heatmap = ({
  routeContent,
}) => (
  <div>
    <h2>Dot plot/Heat map</h2>
    {routeContent}
  </div>
);

Heatmap.defaultProps = {
  routeContent: null,
};

Heatmap.propTypes = {
  routeContent: PropTypes.node,
};

export default Heatmap;
