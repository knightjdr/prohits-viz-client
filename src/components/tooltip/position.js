const tooltipCursorPadding = 7;

const tooltipPosition = (placement, position) => {
  const {
    horizontal,
    vertical,
  } = placement;
  const {
    x,
    y,
  } = position;
  const transformOrigin = `${vertical} ${horizontal}`;
  const { innerHeight, innerWidth } = window;
  switch (transformOrigin) {
    case 'bottom left':
      return {
        transformOrigin,
        bottom: innerHeight - y,
        left: x + tooltipCursorPadding,
      };
    case 'bottom right':
      return {
        transformOrigin,
        bottom: innerHeight - y,
        right: innerWidth - x - tooltipCursorPadding,
      };
    case 'center left':
      return {
        transformOrigin,
        left: x + tooltipCursorPadding,
        top: y - 20,
      };
    case 'top left':
      return {
        transformOrigin,
        left: x + tooltipCursorPadding,
        top: y,
      };
    case 'top right':
      return {
        transformOrigin,
        right: innerWidth - x - tooltipCursorPadding,
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

export default tooltipPosition;
