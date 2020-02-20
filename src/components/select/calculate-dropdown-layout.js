const PADDING = 15;

export const calculateAvailableHeight = (direction, distanceToBottom, elementTop) => (
  direction === 'down' ? distanceToBottom - PADDING : elementTop - PADDING
);

export const calculateDistanceToViewportBottom = elementBottom => (
  window.innerHeight - elementBottom
);

export const defineDirectionToOpen = (directionToOpen, distanceToBottom, elementTop) => {
  if (directionToOpen) {
    return directionToOpen;
  }
  return distanceToBottom > elementTop ? 'down' : 'up';
};

export const defineDropdownPosition = (direction, distanceToBottom, rect) => {
  const { bottom, left, height } = rect;
  const { scrollX, scrollY } = window;

  let position = {
    left: scrollX + left,
  };
  if (direction === 'down') {
    position = {
      ...position,
      top: scrollY + bottom + 5,
      transformOrigin: 'center top',
    };
  } else {
    position = {
      ...position,
      bottom: distanceToBottom + height + 5 - scrollY,
      transformOrigin: 'center bottom',
    };
  }

  return position;
};

const calculateDropdownLayout = (ref, dropdownHeight, directionToOpen) => {
  const rect = ref.getBoundingClientRect();

  const distanceToBottom = calculateDistanceToViewportBottom(rect.bottom);
  const direction = defineDirectionToOpen(directionToOpen, distanceToBottom, rect.top);
  const position = defineDropdownPosition(direction, distanceToBottom, rect);
  const availableHeight = calculateAvailableHeight(direction, distanceToBottom, rect.top);

  return {
    direction,
    height: availableHeight < dropdownHeight ? availableHeight : dropdownHeight,
    width: rect.width,
    ...position,
  };
};

export default calculateDropdownLayout;
