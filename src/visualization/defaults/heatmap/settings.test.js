import fillSettings, { defaultState } from './settings';

describe('Fill settings', () => {
  it('should return user options when valid', () => {
    const settings = {
      current: {
        abundanceCap: 40,
        cellSize: 10,
        edgeColor: 'yellowBlack',
        fillColor: 'yellowBlack',
        imageType: 'dotplot',
        invertColor: true,
        minAbundance: 1,
        primaryFilter: 0.02,
        secondaryFilter: 0.06,
        otherfield: 1,
      },
      default: {
        abundanceCap: 40,
        cellSize: 10,
        edgeColor: 'yellowBlack',
        fillColor: 'yellowBlack',
        imageType: 'dotplot',
        invertColor: true,
        minAbundance: 1,
        primaryFilter: 0.02,
        secondaryFilter: 0.06,
        otherfield: 1,
      },
    };
    const expected = settings;
    expect(fillSettings(settings)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const settings = {
      current: {
        abundanceCap: 'string',
        cellSize: 'string',
        edgeColor: 'pinkBlack',
        fillColor: 'pinkBlack',
        imageType: 'other',
        invertColor: 'true',
        minAbundance: '0',
        primaryFilter: '0.02',
        secondaryFilter: '0.06',
      },
      default: {
        abundanceCap: 'string',
        cellSize: 'string',
        edgeColor: 'pinkBlack',
        fillColor: 'pinkBlack',
        imageType: 'other',
        invertColor: 'true',
        minAbundance: '0',
        primaryFilter: '0.02',
        secondaryFilter: '0.06',
      },
    };
    const expected = {
      current: defaultState,
      default: defaultState,
    };
    expect(fillSettings(settings)).toEqual(expected);
  });

  it('should return current imageType as default when default not defined', () => {
    const settings = {
      current: {
        imageType: 'dotplot',
      },
      default: {},
    };
    const actual = fillSettings(settings);
    const expected = 'dotplot';
    expect(actual.default.imageType).toEqual(expected);
  });

  it('should return defaults when user options missing', () => {
    const settings = {};
    const expected = {
      current: defaultState,
      default: defaultState,
    };
    expect(fillSettings(settings)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const expected = {
      current: defaultState,
      default: defaultState,
    };
    expect(fillSettings(undefined)).toEqual(expected);
  });
});
