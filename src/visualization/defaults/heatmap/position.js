export const defaultState = {
  x: 0,
  y: 0,
};

const fillPosition = (userPosition) => {
  if (!userPosition) {
    return { ...defaultState };
  }

  const {
    x,
    y,
  } = userPosition;
  const position = {};

  // Ensure x and y are between 0 and 1.
  if (
    typeof x === 'number'
    && typeof y === 'number'
  ) {
    position.x = x;
    position.y = y;
  } else {
    position.x = defaultState.x;
    position.y = defaultState.y;
  }

  return position;
};

export default fillPosition;
