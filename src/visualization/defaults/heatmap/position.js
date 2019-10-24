import isObject from '../../../utils/is-object';

export const defaultState = {
  x: 0,
  y: 0,
};

const fillPosition = (userPosition) => {
  if (!userPosition || !isObject(userPosition) || Object.keys(userPosition).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return Object.keys(userPosition).reduce((accum, selection) => {
    const {
      x,
      y,
    } = userPosition[selection];
    const position = {};

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

    return {
      ...accum,
      [selection]: position,
    };
  }, {});
};

export default fillPosition;
