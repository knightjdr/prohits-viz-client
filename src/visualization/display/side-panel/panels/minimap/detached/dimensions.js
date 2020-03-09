import imageSize from '../../../../../../utils/image-size';

export const MIN_WIDTH = 146;

export const viewportPadding = {
  height: 68,
  width: 30,
};

export const intialContainerDimensions = (imageHeight, imageWidth, maxHeight, maxWidth) => {
  let height = imageHeight;
  let width = imageWidth;

  if (imageHeight > maxHeight && imageWidth > maxWidth) {
    if (imageHeight / maxHeight > imageWidth / maxWidth) {
      height = maxHeight;
      width *= (maxHeight / imageHeight);
    } else {
      height *= (maxWidth / imageWidth);
      width = maxWidth;
    }
  } else if (imageHeight > maxHeight) {
    height = maxHeight;
    width *= (maxHeight / imageHeight);
  } else if (imageWidth > maxWidth) {
    height *= (maxWidth / imageWidth);
    width = maxWidth;
  }

  return {
    height,
    width: width > MIN_WIDTH ? width : MIN_WIDTH,
  };
};

export const minimapDimensions = async (minimap) => {
  const [height, width] = await imageSize(minimap);
  return {
    height,
    width,
  };
};

export default intialContainerDimensions;
