import PropTypes from 'prop-types';
import React from 'react';

import StyledDivider from './divider-style';

const Divider = ({
  children,
}) => (
  <StyledDivider>
    <div>{children}</div>
  </StyledDivider>
);

Divider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Divider;
