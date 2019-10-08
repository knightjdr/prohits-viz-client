import isObject from '../../../utils/is-object';

export const defaultState = {
  plotFixed: false,
};

const fillDisplay = (userDisplay) => {
  if (!userDisplay || !isObject(userDisplay) || Object.keys(userDisplay).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return Object.keys(userDisplay).reduce((accum, selection) => {
    const {
      plotFixed,
    } = userDisplay[selection];
    const display = {};

    display.plotFixed = typeof plotFixed === 'boolean' ? plotFixed : defaultState.plotFixed;

    return {
      ...accum,
      [selection]: display,
    };
  }, {});
};

export default fillDisplay;
