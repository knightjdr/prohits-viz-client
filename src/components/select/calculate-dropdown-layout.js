const calculateDropdownLayout = (ref, settings, openDirection) => {
  const PADDING = 15;
  const rect = ref.getBoundingClientRect();
  const { innerHeight } = window;

  const distanceToBottom = innerHeight - rect.bottom;

  let direction;
  if (openDirection) {
    direction = openDirection;
  } else {
    direction = distanceToBottom > rect.top ? 'down' : 'up';
  }

  let position = {
    left: rect.left,
  };
  if (direction === 'down') {
    position = {
      ...position,
      top: rect.bottom + 5,
      transformOrigin: 'center top',
    };
  } else {
    position = {
      ...position,
      bottom: distanceToBottom + rect.height + 5,
      transformOrigin: 'center bottom',
    };
  }

  const availableHeight = direction === 'down'
    ? distanceToBottom - PADDING
    : rect.top - PADDING;

  return {
    direction,
    height: availableHeight < settings.height ? availableHeight : settings.height,
    width: rect.width,
    ...position,
  };
};

export default calculateDropdownLayout;
