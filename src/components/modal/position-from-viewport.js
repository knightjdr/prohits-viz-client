import { createStyleString } from './position-from-cursor';

const horizontalStyles = {
  center: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
};

const verticalStyles = {
  center: {
    top: '50%',
    transform: 'translateY(-50%)',
  },
  top: {
    top: '60px',
  },
};

const mergeTransforms = (horizontal, vertical) => {
  const transforms = [];
  if (horizontal) {
    transforms.push(horizontal);
  }
  if (vertical) {
    transforms.push(vertical);
  }
  return transforms.join(' ');
};

const calculateStyle = (horizontal, vertical) => {
  const horizontalStyle = horizontalStyles[horizontal];
  const verticalStyle = verticalStyles[vertical];
  const transform = mergeTransforms(horizontalStyle.transform, verticalStyle.transform);
  return {
    ...horizontalStyle,
    ...verticalStyle,
    transform,
  };
};

const positionFromViewport = (element, placement) => {
  const {
    horizontal,
    vertical,
  } = placement;

  const style = {
    ...calculateStyle(horizontal, vertical),
  };
  element.setAttribute('style', createStyleString(style));
};

export default positionFromViewport;
