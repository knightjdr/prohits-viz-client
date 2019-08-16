import imageSize from '../../../../../../utils/image-size';

const MIN_WIDTH = 165;

export const scaleDimensions = (height = 0, width = 0, maxHeight, maxWidth) => {
  let scaledHeight = height;
  let scaledWidth = width;
  if (scaledHeight > maxHeight) {
    scaledWidth *= (maxHeight / scaledHeight);
    scaledHeight = maxHeight;
  } if (scaledWidth > maxWidth) {
    scaledHeight *= (maxWidth / scaledWidth);
    scaledWidth = maxWidth;
  }
  return [scaledHeight, scaledWidth];
};

export const detachedContainerDimensions = (imageHeight, imageWidth) => {
  const height = imageHeight + 48;
  const width = imageWidth < MIN_WIDTH ? MIN_WIDTH + 10 : imageWidth + 10;

  return {
    height,
    width,
  };
};

export const detachedImageDimensions = (imageHeight, imageWidth, maxHeight, maxWidth) => {
  const [scaledHeight, scaledWidth] = scaleDimensions(imageHeight, imageWidth, maxHeight, maxWidth);

  return {
    height: scaledHeight,
    width: scaledWidth,
  };
};

export const minimapDimensions = async (minimap) => {
  const [height, width] = await imageSize(minimap);
  return {
    height,
    width,
  };
};
