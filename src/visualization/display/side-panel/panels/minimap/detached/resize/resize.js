import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as ResizeIcon } from './assets/resize.svg';

import './resize.css';

const Resize = ({
  handleMouseDown,
}) => (
  <button
    className="minimap__detached-resize"
    onMouseDown={handleMouseDown}
    type="button"
  >
    <ResizeIcon />
  </button>
);

Resize.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
};

export default Resize;
