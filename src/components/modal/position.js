const position = (placement) => {
  const {
    horizontal,
    vertical,
    x,
    y,
  } = placement;
  const transformOrigin = `${vertical} ${horizontal}`;
  const { innerHeight, innerWidth } = window;
  switch (transformOrigin) {
    case 'bottom left':
      return {
        transformOrigin,
        bottom: innerHeight - y,
        left: x,
      };
    case 'bottom right':
      return {
        transformOrigin,
        bottom: innerHeight - y,
        right: innerWidth - x,
      };
    case 'top left':
      return {
        transformOrigin,
        left: x,
        top: y,
      };
    case 'top right':
      return {
        transformOrigin,
        right: innerWidth - x,
        top: y,
      };
    default:
      return {
        transformOrigin,
        left: x,
        top: y,
      };
  }
};

export default position;
