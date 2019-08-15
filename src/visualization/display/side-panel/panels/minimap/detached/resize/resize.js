import PropTypes from 'prop-types';
import React from 'react';

import './resize.css';

const Resize = ({
  handleMouseDown,
}) => (
  <button
    className="minimap__detached-resize"
    onMouseDown={handleMouseDown}
    type="button"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16.166 15.823">
      <circle fill="#BDBDBD" cx="10.786" cy="13.526" r="1.714" />
      <circle fill="#BDBDBD" cx="6.5" cy="9.24" r="1.714" />
      <circle fill="#BDBDBD" cx="6.5" cy="13.526" r="1.714" />
      <circle fill="#BDBDBD" cx="2.214" cy="4.954" r="1.714" />
      <circle fill="#BDBDBD" cx="2.214" cy="9.24" r="1.714" />
      <circle fill="#BDBDBD" cx="2.214" cy="13.526" r="1.714" />
    </svg>
  </button>
);

Resize.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
};

export default Resize;
