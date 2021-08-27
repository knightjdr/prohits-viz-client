import fillSnapshots from '../snapshot';
import isObject from '../../../utils/is-object';
import { validateArray, validateBoolean, validateNumber } from '../../../utils/validate-type';

export const defaultState = {
  abundanceCap: 50,
  abundanceType: 'positive',
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

const acceptedAbundanceTypes = {
  bidirectional: true,
  negative: true,
  positive: true,
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

const validateAbundanceType = (abundanceType, fillColor, defaultAbundanceType) => {
  if (acceptedAbundanceTypes[abundanceType]) {
    return abundanceType;
  } if (fillColor === 'blueRed' || fillColor === 'blueYellow') {
    return 'bidirectional';
  }
  return defaultAbundanceType;
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
    abundanceType,
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

  const validatedFillColor = validateColor(fillColor, defaultState.fillColor);
  const settings = {
    ...other,
    abundanceCap: validateNumber(abundanceCap, defaultState.abundanceCap),
    abundanceType: validateAbundanceType(abundanceType, validatedFillColor, defaultState.abundanceType),
    cellSize: Number.isInteger(cellSize) && cellSize > 0 ? cellSize : defaultState.cellSize,
    edgeColor: validateColor(edgeColor, defaultState.edgeColor),
    fillColor: validatedFillColor,
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
