import isObject from '../../../utils/is-object';
import { validateBoolean } from '../../../utils/validate-type';

export const defaultState = {
  plotFixed: false,
  showTooltips: false,
};

const fillSelectionDisplay = fileDisplayOptions => (
  Object.keys(fileDisplayOptions).reduce((accum, selection) => {
    const {
      plotFixed,
      showTooltips,
    } = fileDisplayOptions[selection];

    const display = {
      plotFixed: validateBoolean(plotFixed, defaultState.plotFixed),
      showTooltips: validateBoolean(showTooltips, defaultState.showTooltips),
    };

    return {
      ...accum,
      [selection]: display,
    };
  }, {})
);

const fillDisplay = (fileDisplayOptions) => {
  if (!fileDisplayOptions || !isObject(fileDisplayOptions) || Object.keys(fileDisplayOptions).length === 0) {
    return {
      main: { ...defaultState },
    };
  }

  return fillSelectionDisplay(fileDisplayOptions);
};

export default fillDisplay;
