import PropTypes from 'prop-types';
import React from 'react';

const Analysis = ({
  routeContent,
}) => (
  <div>
    <h1>Analysis</h1>
    {routeContent}
  </div>
);

Analysis.defaultProps = {
  routeContent: null,
};

Analysis.propTypes = {
  routeContent: PropTypes.node,
};

export default Analysis;
