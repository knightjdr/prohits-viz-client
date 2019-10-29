import isObject from '../../../utils/is-object';
import { validateArray, validateBoolean, validateNumber } from '../../../utils/validate-type';

export const defaultState = {
  abundanceCap: 50,
  cellSize: 15,
  edgeColor: 'blue',
  fillColor: 'blue',
  filterBy: [],
  imageType: 'heatmap',
  invertColor: false,
  minAbundance: 0,
  primaryFilter: 0.01,
  removeEmptyColumns: false,
  resetRatios: false,
  secondaryFilter: 0.05,
};

const acceptedColors = {
  blue: true,
  blueRed: true,
  blueYellow: true,
  green: true,
  greyscale: true,
  red: true,
  yellow: true,
};

const acceptedImageTypes = {
  dotplot: true,
  heatmap: true,
};

const validateColor = (color, defaultColor) => (
  acceptedColors[color] ? color : defaultColor
);

const validateImageType = (imageType, defaultImageType) => (
  acceptedImageTypes[imageType] ? imageType : defaultImageType
);

export const validateSettings = (userSettings, defaultImageType = 'heatmap') => {
  if (!userSettings) {
    return { ...defaultState };
  }

  const {
    abundanceCap,
    cellSize,
    edgeColor,
    fillColor,
    filterBy,
    imageType,
    invertColor,
    minAbundance,
    primaryFilter,
    removeEmptyColumns,
    resetRatios,
    secondaryFilter,
    ...other
  } = userSettings;

  const settings = { ...other };

  settings.abundanceCap = validateNumber(abundanceCap, defaultState.abundanceCap);
  settings.cellSize = Number.isInteger(cellSize) && cellSize > 0 ? cellSize : defaultState.cellSize;
  settings.edgeColor = validateColor(edgeColor, defaultState.edgeColor);
  settings.fillColor = validateColor(fillColor, defaultState.fillColor);
  settings.filterBy = validateArray(filterBy, defaultState.filterBy);
  settings.imageType = validateImageType(imageType, defaultImageType);
  settings.invertColor = validateBoolean(invertColor, defaultState.invertColor);
  settings.minAbundance = validateNumber(minAbundance, defaultState.minAbundance);
  settings.primaryFilter = validateNumber(primaryFilter, defaultState.primaryFilter);
  settings.removeEmptyColumns = validateBoolean(removeEmptyColumns, defaultState.removeEmptyColumns);
  settings.resetRatios = validateBoolean(resetRatios, defaultState.resetRatios);
  settings.secondaryFilter = validateNumber(secondaryFilter, defaultState.secondaryFilter);

  return settings;
};

const fillSelectionSettings = fileSettings => (
  Object.keys(fileSettings).reduce((accum, selection) => {
    const settings = {};
    settings.current = validateSettings(fileSettings[selection].current);
    settings.default = fileSettings[selection].default
      ? validateSettings(
        fileSettings[selection].default,
        settings.current.imageType,
      )
      : settings.current;

    return {
      ...accum,
      [selection]: settings,
    };
  }, {})
);

const fillSettings = (fileSettings) => {
  if (!fileSettings || !isObject(fileSettings) || Object.keys(fileSettings).length === 0) {
    return {
      main: {
        current: { ...defaultState },
        default: { ...defaultState },
      },
    };
  }

  return fillSelectionSettings(fileSettings);
};

export default fillSettings;
