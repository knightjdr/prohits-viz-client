import PropTypes from 'prop-types';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const A = ({
  children,
  download,
  to,
  ...props
}) => (
  to.startsWith('/') && !download
    ? (
      <Link to={to} {...props}>
        {children}
      </Link>
    )
    : (
      <a
        href={to}
        download={download}
        {...props}
      >
        {children}
      </a>
    )
);

A.defaultProps = {
  children: null,
  download: false,
};

A.propTypes = {
  children: PropTypes.node,
  download: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default A;
