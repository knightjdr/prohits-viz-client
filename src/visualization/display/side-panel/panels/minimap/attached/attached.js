import PropTypes from 'prop-types';
import React from 'react';

import './attached.css';

const Attached = ({
  children,
  containerDimensions,
}) => (
  <div className="panel__attached">
    <div style={containerDimensions}>
      {children}
    </div>
  </div>
);

Attached.propTypes = {
  children: PropTypes.node.isRequired,
  containerDimensions: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
};

export default Attached;
