import PropTypes from 'prop-types';
import React from 'react';

import './image.css';

const Image = ({
  minimap,
}) => (
  <img
    alt="Minimap"
    className="minimap__image"
    src={minimap}
  />
);

Image.propTypes = {
  minimap: PropTypes.string.isRequired,
};

export default Image;
