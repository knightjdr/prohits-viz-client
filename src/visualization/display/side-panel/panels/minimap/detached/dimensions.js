import imageSize from '../../../../../../utils/image-size';

const checkHeight = (desiredHeight) => {
  const maxHeight = window.innerHeight - 75;

  let height = desiredHeight;
  if (height > maxHeight) {
    height = maxHeight;
  }

  return height;
};

const checkWidth = (desiredWidth) => {
  const maxWidth = window.innerWidth - 30;

  let width = desiredWidth;
  if (width > maxWidth) {
    width = maxWidth;
  }

  return width;
};

const dimensions = async (minimap) => {
  const [imageHeight, imageWidth] = minimap ? await imageSize(minimap) : [0, 0];

  let height = checkHeight(imageHeight);
  let width = checkWidth(imageWidth);

  if (height / imageHeight > width / imageWidth) {
    width *= height / imageHeight;
  } else {
    height *= width / imageWidth;
  }

  return {
    height,
    width,
  };
};

export default dimensions;
