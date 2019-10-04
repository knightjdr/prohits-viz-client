import PropTypes from 'prop-types';
import React from 'react';

const NavbarStyle = ({ children }) => <nav>{children}</nav>;

NavbarStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarStyle;
