import PropTypes from 'prop-types';
import React from 'react';

const Image = ({
  alt,
  height,
  imageSet,
  width,
}) => (
  <picture className="dynamic-image">
    <source
      srcSet={`${imageSet.webp[0]},
      ${imageSet.webp[1]} 2x,
      ${imageSet.webp[2]} 3x"`}
      type="image/webp"
    />
    <source
      srcSet={`${imageSet.jpg[0]},
      ${imageSet.jpg[1]} 2x,
      ${imageSet.jpg[2]} 3x"`}
      type="image/jpeg"
    />
    <img
      alt={alt}
      height={height}
      src={imageSet.jpg[2]}
      width={width}
    />
  </picture>
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  imageSet: PropTypes.shape({
    jpg: PropTypes.arrayOf(PropTypes.string),
    webp: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  width: PropTypes.number.isRequired,
};

export default Image;
