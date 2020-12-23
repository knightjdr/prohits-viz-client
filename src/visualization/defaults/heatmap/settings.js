import fillSnapshots from '../snapshot';
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
  removeFailingColumns: false,
  removeFailingRows: true,
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
    removeFailingColumns,
    removeFailingRows,
    resetRatios,
    secondaryFilter,
    ...other
  } = userSettings;

  const settings = {
    ...other,
    abundanceCap: validateNumber(abundanceCap, defaultState.abundanceCap),
    cellSize: Number.isInteger(cellSize) && cellSize > 0 ? cellSize : defaultState.cellSize,
    edgeColor: validateColor(edgeColor, defaultState.edgeColor),
    fillColor: validateColor(fillColor, defaultState.fillColor),
    filterBy: validateArray(filterBy, defaultState.filterBy),
    imageType: validateImageType(imageType, defaultImageType),
    invertColor: validateBoolean(invertColor, defaultState.invertColor),
    minAbundance: validateNumber(minAbundance, defaultState.minAbundance),
    primaryFilter: validateNumber(primaryFilter, defaultState.primaryFilter),
    removeFailingColumns: validateBoolean(removeFailingColumns, defaultState.removeFailingColumns),
    removeFailingRows: validateBoolean(removeFailingRows, defaultState.removeFailingRows),
    resetRatios: validateBoolean(resetRatios, defaultState.resetRatios),
    secondaryFilter: validateNumber(secondaryFilter, defaultState.secondaryFilter),
  };

  return settings;
};

export const fillSnapshotSettings = (inputSettings) => {
  const settings = {};
  settings.default = validateSettings(inputSettings.default);
  settings.current = inputSettings.current
    ? validateSettings(
      inputSettings.current,
      settings.default.imageType,
    )
    : settings.default;

  return settings;
};

const fillSettings = (fileSettings) => {
  let settings = fileSettings;
  if (!settings || !isObject(settings) || Object.keys(settings).length === 0) {
    return {
      main: {
        current: { ...defaultState },
        default: { ...defaultState },
      },
    };
  } if (isObject(settings) && Object.keys(settings).length > 0 && !settings.main) {
    settings = {
      main: {
        default: settings,
      },
    };
  }

  return fillSnapshots(settings, fillSnapshotSettings);
};

export default fillSettings;
