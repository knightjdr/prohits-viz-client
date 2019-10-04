import PropTypes from 'prop-types';
import React from 'react';

const TextLinksStyle = ({ children }) => <ul>{children}</ul>;

TextLinksStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextLinksStyle;
