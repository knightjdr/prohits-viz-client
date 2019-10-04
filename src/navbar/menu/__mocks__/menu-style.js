import PropTypes from 'prop-types';
import React from 'react';

const MenuStyle = ({ children }) => <div>{children}</div>;

MenuStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuStyle;
