import PropTypes from 'prop-types';
import React from 'react';

import Image from './image';

const getImages = (name, images) => ({
  jpg: [
    images[`${name}1x.jpg`],
    images[`${name}2x.jpg`],
    images[`${name}3x.jpg`],
  ],
  webp: [
    images[`${name}1x.webp`],
    images[`${name}2x.webp`],
    images[`${name}3x.webp`],
  ],
});

const ImageContainer = ({
  alt,
  height,
  images,
  name,
  width,
}) => {
  const imageSet = getImages(name, images);

  return (
    <Image
      alt={alt}
      height={height}
      imageSet={imageSet}
      width={width}
    />
  );
};

ImageContainer.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  images: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default ImageContainer;
