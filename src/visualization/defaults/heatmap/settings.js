export const defaultState = {
  abundanceCap: 50,
  cellSize: 15,
  edgeColor: 'blue',
  fillColor: 'blue',
  imageType: 'heatmap',
  invertColor: false,
  minAbundance: 0,
  primaryFilter: 0.01,
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

const validateSettings = (userSettings, defaultImageType = 'heatmap') => {
  if (!userSettings) {
    return { ...defaultState };
  }

  const {
    abundanceCap,
    cellSize,
    edgeColor,
    fillColor,
    imageType,
    invertColor,
    minAbundance,
    primaryFilter,
    secondaryFilter,
    ...other
  } = userSettings;

  const settings = { ...other };

  settings.abundanceCap = typeof abundanceCap === 'number' ? abundanceCap : defaultState.abundanceCap;
  settings.cellSize = Number.isInteger(cellSize) && cellSize > 0 ? cellSize : defaultState.cellSize;
  settings.edgeColor = acceptedColors[edgeColor] ? edgeColor : defaultState.edgeColor;
  settings.fillColor = acceptedColors[fillColor] ? fillColor : defaultState.fillColor;
  settings.imageType = acceptedImageTypes[imageType] ? imageType : defaultImageType;
  settings.invertColor = typeof invertColor === 'boolean' ? invertColor : defaultState.invertColor;
  settings.minAbundance = typeof minAbundance === 'number' ? minAbundance : defaultState.minAbundance;
  settings.primaryFilter = typeof primaryFilter === 'number' ? primaryFilter : defaultState.primaryFilter;
  settings.secondaryFilter = typeof secondaryFilter === 'number' ? secondaryFilter : defaultState.secondaryFilter;

  return settings;
};

const fillSettings = (userSettings) => {
  if (!userSettings) {
    return {
      current: { ...defaultState },
      default: { ...defaultState },
    };
  }

  const settings = {};
  settings.current = validateSettings(userSettings.current);
  settings.default = validateSettings(userSettings.default, settings.current.imageType);

  return settings;
};

export default fillSettings;
