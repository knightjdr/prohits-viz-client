const VIEWPORT_PADDING = 5;

const calculateBottom = (elementHeight, y) => {
  const { innerHeight } = window;
  const bottom = innerHeight - y;
  return bottom + elementHeight < innerHeight
    ? `${bottom}px`
    : `${innerHeight - elementHeight - VIEWPORT_PADDING}px`;
};

const calculateLeft = (elementWidth, x) => {
  const { innerWidth } = window;
  const left = x;
  return left + elementWidth < innerWidth
    ? `${left}px`
    : `${innerWidth - elementWidth - VIEWPORT_PADDING}px`;
};

const calculateRight = (elementWidth, x) => {
  const { innerWidth } = window;
  const right = innerWidth - x;
  return right + elementWidth < innerWidth
    ? `${right}px`
    : `${innerWidth - elementWidth - VIEWPORT_PADDING}px`;
};

const calculateTop = (elementHeight, y) => {
  const { innerHeight } = window;
  const top = y;
  return top + elementHeight < innerHeight
    ? `${top}px`
    : `${innerHeight - elementHeight - VIEWPORT_PADDING}px`;
};

const calculateVerticalCenter = (elementHeight, y) => {
  const { innerHeight } = window;
  const halfHeight = (elementHeight / 2);
  const top = y - halfHeight;
  return top + elementHeight < innerHeight
    ? `${top}px`
    : `${innerHeight - elementHeight - VIEWPORT_PADDING}px`;
};

const calculateBottomLeft = (elementDimensions, x, y) => ({
  bottom: calculateBottom(elementDimensions.height, y),
  left: calculateLeft(elementDimensions.width, x),
});

const calculateBottomRight = (elementDimensions, x, y) => ({
  bottom: calculateBottom(elementDimensions.height, y),
  right: calculateRight(elementDimensions.width, x),
});

const calculateCenterLeft = (elementDimensions, x, y) => ({
  left: calculateLeft(elementDimensions.width, x),
  top: calculateVerticalCenter(elementDimensions.height, y),
});

const calculateCenterRight = (elementDimensions, x, y) => ({
  right: calculateRight(elementDimensions.width, x),
  top: calculateVerticalCenter(elementDimensions.height, y),
});

const calculateTopLeft = (elementDimensions, x, y) => ({
  left: calculateLeft(elementDimensions.width, x),
  top: calculateTop(elementDimensions.height, y),
});

const calculateTopRight = (elementDimensions, x, y) => ({
  right: calculateRight(elementDimensions.width, x),
  top: calculateTop(elementDimensions.height, y),
});

export const createStyleString = (style) => (
  Object.entries(style).reduce((accum, [key, value]) => (
    `${accum} ${key}: ${value};`
  ), '')
);

const calculatePosition = (element, origin, x, y) => {
  const elementDimensions = element.getBoundingClientRect();
  switch (origin) {
    case 'bottom left':
      return calculateBottomLeft(elementDimensions, x, y);
    case 'bottom right':
      return calculateBottomRight(elementDimensions, x, y);
    case 'center left':
      return calculateCenterLeft(elementDimensions, x, y);
    case 'center right':
      return calculateCenterRight(elementDimensions, x, y);
    case 'top left':
      return calculateTopLeft(elementDimensions, x, y);
    case 'top right':
      return calculateTopRight(elementDimensions, x, y);
    default:
      return {};
  }
};

const positionFromCursor = (element, placement) => {
  const {
    horizontal,
    vertical,
    x,
    y,
  } = placement;

  const origin = `${vertical} ${horizontal}`;
  const style = {
    'transform-origin': origin,
    ...calculatePosition(element, origin, x, y),
  };
  element.setAttribute('style', createStyleString(style));
};

export default positionFromCursor;
