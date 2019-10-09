import isObject from '../../../utils/is-object';

export const defaultState = {
  abundanceCap: 50,
  cellSize: 15,
  edgeColor: 'blue',
  fillColor: 'blue',
  filterBy: '',
  imageType: 'heatmap',
  invertColor: false,
  minAbundance: 0,
  primaryFilter: 0.01,
  removeEmptyColumns: false,
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
    secondaryFilter,
    ...other
  } = userSettings;

  const settings = { ...other };

  settings.abundanceCap = typeof abundanceCap === 'number' ? abundanceCap : defaultState.abundanceCap;
  settings.cellSize = Number.isInteger(cellSize) && cellSize > 0 ? cellSize : defaultState.cellSize;
  settings.edgeColor = acceptedColors[edgeColor] ? edgeColor : defaultState.edgeColor;
  settings.fillColor = acceptedColors[fillColor] ? fillColor : defaultState.fillColor;
  settings.filterBy = typeof filterBy === 'string' ? filterBy : defaultState.filterBy;
  settings.imageType = acceptedImageTypes[imageType] ? imageType : defaultImageType;
  settings.invertColor = typeof invertColor === 'boolean' ? invertColor : defaultState.invertColor;
  settings.minAbundance = typeof minAbundance === 'number' ? minAbundance : defaultState.minAbundance;
  settings.primaryFilter = typeof primaryFilter === 'number' ? primaryFilter : defaultState.primaryFilter;
  settings.removeEmptyColumns = typeof removeEmptyColumns === 'boolean'
    ? removeEmptyColumns : defaultState.removeEmptyColumns;
  settings.secondaryFilter = typeof secondaryFilter === 'number' ? secondaryFilter : defaultState.secondaryFilter;

  return settings;
};

const fillSettings = (userSettings) => {
  if (!userSettings || !isObject(userSettings) || Object.keys(userSettings).length === 0) {
    return {
      main: {
        current: { ...defaultState },
        default: { ...defaultState },
      },
    };
  }

  return Object.keys(userSettings).reduce((accum, selection) => {
    const settings = {};
    settings.current = validateSettings(userSettings[selection].current);
    settings.default = userSettings[selection].default
      ? validateSettings(
        userSettings[selection].default,
        settings.current.imageType,
      )
      : settings.current;

    return {
      ...accum,
      [selection]: settings,
    };
  }, {});
};

export default fillSettings;
