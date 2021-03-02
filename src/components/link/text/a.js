import PropTypes from 'prop-types';
import React from 'react';

import { A as RouterLink } from 'hookrouter';

const A = ({
  children,
  download,
  href,
  ...props
}) => (
  href.startsWith('/') && !download
    ? (
      <RouterLink href={href} {...props}>
        {children}
      </RouterLink>
    )
    : (
      <a
        href={href}
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
  href: PropTypes.string.isRequired,
};

export default A;
