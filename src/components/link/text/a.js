import PropTypes from 'prop-types';
import React from 'react';

import { A as RouterLink } from 'hookrouter';

const A = ({
  children,
  href,
  ...props
}) => (
  href.startsWith('/')
    ? (
      <RouterLink href={href} {...props}>
        {children}
      </RouterLink>
    )
    : (
      <a href={href} {...props}>
        {children}
      </a>
    )
);

A.defaultProps = {
  children: null,
};

A.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
};

export default A;
