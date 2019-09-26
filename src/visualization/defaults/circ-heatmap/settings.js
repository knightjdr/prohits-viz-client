export const defaultState = {
  known: true,
  plot: 0,
};

export const defaultSegmentState = {
  abundanceCap: 50,
  color: 'blue',
  minAbundance: 0,
};

const acceptedColors = ['blue', 'blueRed', 'blueYellow', 'green', 'greyscale', 'red', 'yellow'];

const fillSegments = length => Array.from(Array(length)).map(() => ({ ...defaultSegmentState }));

const fillSettings = (userSettings, plots) => {
  if (!userSettings || !userSettings.current) {
    return {
      current: {
        ...defaultState,
        segments: fillSegments(plots[0].segments.length),
      },
    };
  }

  const {
    known,
    plot,
    segments,
    ...other
  } = userSettings.current;
  const settings = {};

  settings.known = typeof known === 'boolean' ? known : defaultState.known;
  settings.plot = Number.isInteger(plot) && plot < plots.length ? plot : defaultState.plot;

  if (segments && Array.isArray(segments) && segments.length === plots[0].segments.length) {
    settings.segments = segments.map((segment) => {
      const {
        abundanceCap,
        color,
        minAbundance,
      } = segment;
      return {
        abundanceCap: typeof abundanceCap === 'number' ? abundanceCap : defaultSegmentState.abundanceCap,
        color: acceptedColors.includes(color) ? color : defaultSegmentState.color,
        minAbundance: typeof minAbundance === 'number' ? minAbundance : defaultSegmentState.minAbundance,
      };
    });
  } else {
    settings.segments = fillSegments(plots[0].segments.length);
  }

  return {
    current: {
      ...settings,
      ...other,
    },
  };
};

export default fillSettings;
