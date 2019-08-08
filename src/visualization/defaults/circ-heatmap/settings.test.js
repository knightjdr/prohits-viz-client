import fillSettings, { defaultSegmentState, defaultState } from './settings';

describe('Fill settings', () => {
  it('should return user options when valid', () => {
    const plots = [
      { segments: [1, 1] },
      { segments: [1, 1] },
    ];
    const settings = {
      current: {
        known: false,
        plot: 1,
        segments: [
          { abundanceCap: 40, color: 'yellowBlack', minAbundance: 1 },
          { abundanceCap: 40, color: 'yellowBlack', minAbundance: 1 },
        ],
        otherField: 1,
      },
    };
    const expected = {
      ...settings,
    };
    expect(fillSettings(settings, plots)).toEqual(expected);
  });

  it('should return defaults when user options invalid', () => {
    const plots = [
      { segments: [1, 1] },
      { segments: [1, 1] },
    ];
    const settings = {
      current: {
        known: 'false',
        plot: 2,
        segments: [
          { abundanceCap: 40, color: 'yellowBlack', minAbundance: 1 },
          { abundanceCap: 40, color: 'yellowBlack', minAbundance: 1 },
        ],
      },
    };
    const expected = {
      current: {
        ...defaultState,
        segments: settings.current.segments,
      },
    };
    expect(fillSettings(settings, plots)).toEqual(expected);
  });

  describe('invalid segments', () => {
    it('should return defaults when segments is not defined', () => {
      const plots = [
        { segments: [1, 1] },
        { segments: [1, 1] },
      ];
      const settings = {
        current: {
          known: false,
          plot: 1,
        },
      };
      const actual = fillSettings(settings, plots);
      const expected = [
        defaultSegmentState,
        defaultSegmentState,
      ];
      expect(actual.current.segments).toEqual(expected);
    });

    it('should return defaults when segments is not an array', () => {
      const plots = [
        { segments: [1, 1] },
        { segments: [1, 1] },
      ];
      const settings = {
        current: {
          known: false,
          plot: 1,
          segments: {},
        },
      };
      const actual = fillSettings(settings, plots);
      const expected = [
        defaultSegmentState,
        defaultSegmentState,
      ];
      expect(actual.current.segments).toEqual(expected);
    });

    it('should return defaults when segments is not the correct length', () => {
      const plots = [
        { segments: [1, 1] },
        { segments: [1, 1] },
      ];
      const settings = {
        current: {
          known: false,
          plot: 1,
          segments: [
            { abundanceCap: 40, color: 'yellowBlack', minAbundance: 1 },
          ],
        },
      };
      const actual = fillSettings(settings, plots);
      const expected = [
        defaultSegmentState,
        defaultSegmentState,
      ];
      expect(actual.current.segments).toEqual(expected);
    });

    it('should return defaults when segment options are invalid', () => {
      const plots = [
        { segments: [1, 1] },
        { segments: [1, 1] },
      ];
      const settings = {
        current: {
          known: false,
          plot: 1,
          segments: [
            { abundanceCap: '40', color: 'pinkBlack', minAbundance: '1' },
            { abundanceCap: '40', color: 'pinkBlack', minAbundance: '1' },
          ],
        },
      };
      const actual = fillSettings(settings, plots);
      const expected = [
        defaultSegmentState,
        defaultSegmentState,
      ];
      expect(actual.current.segments).toEqual(expected);
    });
  });

  it('should return defaults when user options missing', () => {
    const plots = [
      { segments: [1, 1] },
      { segments: [1, 1] },
    ];
    const settings = {};
    const expected = {
      current: {
        ...defaultState,
        segments: [
          defaultSegmentState,
          defaultSegmentState,
        ],
      },
    };
    expect(fillSettings(settings, plots)).toEqual(expected);
  });

  it('should return defaults when user options undefined', () => {
    const plots = [
      { segments: [1, 1] },
      { segments: [1, 1] },
    ];
    const expected = {
      current: {
        ...defaultState,
        segments: [
          defaultSegmentState,
          defaultSegmentState,
        ],
      },
    };
    expect(fillSettings(undefined, plots)).toEqual(expected);
  });
});
