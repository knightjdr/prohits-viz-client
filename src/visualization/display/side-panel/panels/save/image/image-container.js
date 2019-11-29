import React from 'react';

import Image from './image';

const ImageContainer = () => {
  const handleChange = () => {};

  const handleSave = () => {};

  return (
    <Image
      handleChange={handleChange}
      handleSave={handleSave}
      imageType="svg"
    />
  );
};

export default ImageContainer;
