export const defaultState = {
  abundanceCap: 50,
  cellSize: 15,
  edgeColor: 'blueBlack',
  fillColor: 'blueBlack',
  invertColor: false,
  minAbundance: 0,
  primaryFilter: 0.01,
  secondaryFilter: 0.05,
};

const acceptedColors = ['blueBlack', 'blueRed', 'blueYellow', 'greenBlack', 'greyscale', 'redBlack', 'yellowBlack'];

const fillSettings = (userSettings) => {
  if (!userSettings || !userSettings.current) {
    return {
      current: { ...defaultState },
    };
  }

  const {
    abundanceCap,
    cellSize,
    edgeColor,
    fillColor,
    invertColor,
    minAbundance,
    primaryFilter,
    secondaryFilter,
    ...other
  } = userSettings.current;
  const settings = {};

  settings.abundanceCap = typeof abundanceCap === 'number' ? abundanceCap : defaultState.abundanceCap;
  settings.cellSize = Number.isInteger(cellSize) && cellSize > 0 ? cellSize : defaultState.cellSize;
  settings.edgeColor = acceptedColors.includes(edgeColor) ? edgeColor : defaultState.edgeColor;
  settings.fillColor = acceptedColors.includes(fillColor) ? fillColor : defaultState.fillColor;
  settings.invertColor = typeof invertColor === 'boolean' ? invertColor : defaultState.invertColor;
  settings.minAbundance = typeof minAbundance === 'number' ? minAbundance : defaultState.minAbundance;
  settings.primaryFilter = typeof primaryFilter === 'number' ? primaryFilter : defaultState.primaryFilter;
  settings.secondaryFilter = typeof secondaryFilter === 'number' ? secondaryFilter : defaultState.secondaryFilter;

  return {
    current: {
      ...settings,
      ...other,
    },
  };
};

export default fillSettings;
