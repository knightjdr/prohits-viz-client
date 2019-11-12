import fillSettings, { defaultState, validateSettings } from './settings';

describe('Validate settings', () => {
  it('should return user-defined settings when valid', () => {
    const userSettings = {
      abundanceCap: 40,
      cellSize: 10,
      edgeColor: 'yellow',
      fillColor: 'yellow',
      filterBy: ['a'],
      imageType: 'dotplot',
      invertColor: true,
      minAbundance: 1,
      primaryFilter: 0.02,
      removeFailingColumns: true,
      removeFailingRows: false,
      resetRatios: true,
      secondaryFilter: 0.06,
      otherfield: 1,
    };
    const expected = userSettings;
    expect(validateSettings(userSettings)).toEqual(expected);
  });

  it('should return defaults when user-defined settings invalid', () => {
    const userSettings = {
      abundanceCap: 'string',
      cellSize: 'string',
      edgeColor: 'pink',
      fillColor: 'pink',
      filterBy: 'a',
      imageType: 'other',
      invertColor: 'true',
      minAbundance: '0',
      primaryFilter: '0.02',
      removeFailingColumns: 'true',
      removeFailingRows: 'false',
      resetRatios: 'true',
      secondaryFilter: '0.06',
    };
    const expected = defaultState;
    expect(validateSettings(userSettings)).toEqual(expected);
  });
});

describe('Fill settings', () => {
  it('should return user-defined settings when valid', () => {
    const settings = {
      abundanceCap: 40,
      cellSize: 10,
      edgeColor: 'yellow',
      fillColor: 'yellow',
      filterBy: ['a'],
      imageType: 'dotplot',
      invertColor: true,
      minAbundance: 1,
      primaryFilter: 0.02,
      removeFailingColumns: true,
      removeFailingRows: false,
      resetRatios: true,
      secondaryFilter: 0.06,
      otherfield: 1,
    };
    const userSettings = {
      main: {
        current: settings,
        default: settings,
      },
    };
    const expected = userSettings;
    expect(fillSettings(userSettings)).toEqual(expected);
  });

  it('should return defaults when no selections are defined', () => {
    const userSettings = {};
    const expected = {
      main: {
        current: defaultState,
        default: defaultState,
      },
    };
    expect(fillSettings(userSettings)).toEqual(expected);
  });

  it('should return defaults when settings are not an object', () => {
    const userSettings = [];
    const expected = {
      main: {
        current: defaultState,
        default: defaultState,
      },
    };
    expect(fillSettings(userSettings)).toEqual(expected);
  });

  it('should return current imageType as default when default not defined', () => {
    const userSettings = {
      main: {
        current: {
          imageType: 'dotplot',
        },
        default: {},
      },
    };
    const actual = fillSettings(userSettings);
    const expected = 'dotplot';
    expect(actual.main.default.imageType).toEqual(expected);
  });
});
