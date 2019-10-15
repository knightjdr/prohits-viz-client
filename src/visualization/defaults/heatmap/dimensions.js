import isObject from '../../../utils/is-object';

export const defaultState = {
  canTranslate: true,
  columns: 0,
  height: 0,
  pageX: 0,
  pageY: 0,
  rows: 0,
  width: 0,
  wrapperHeight: 0,
  wrapperWidth: 0,
};

const fillDimensions = (userDimensions) => {
  if (!userDimensions || !isObject(userDimensions) || Object.keys(userDimensions).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return Object.keys(userDimensions).reduce((accum, selection) => ({
    ...accum,
    [selection]: { ...defaultState },
  }), {});
};

export default fillDimensions;
