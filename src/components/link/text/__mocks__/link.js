import PropTypes from 'prop-types';
import React from 'react';

const Link = ({
  children,
  outline,
  visited,
  ...props
}) => (
  <a {...props}>{children}</a>
);

Link.defaultProps = {
  outline: true,
  visited: false,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  outline: PropTypes.bool,
  visited: PropTypes.bool,
};

export default Link;
