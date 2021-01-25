import fillSettings, { defaultState, validateSettings } from './settings';

describe('Validate settings', () => {
  it('should return user-defined settings when valid', () => {
    const userSettings = {
      segmentOrder: [{ color: 'blue' }],
      showKnown: true,
      showText: true,
    };
    const expected = userSettings;
    expect(validateSettings(userSettings)).toEqual(expected);
  });

  it('should return defaults when user-defined settings invalid', () => {
    const userSettings = {
      segmentOrder: {},
      showKnown: 'true',
      showText: 'true',
    };
    const expected = defaultState;
    expect(validateSettings(userSettings)).toEqual(expected);
  });
});

describe('Fill settings', () => {
  it('should return user-defined settings when valid', () => {
    const settings = {
      segmentOrder: [{ color: 'blue' }],
      showKnown: true,
      showText: true,
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

  it('should return set current settings to defaults when current key is missing', () => {
    const settings = {
      segmentOrder: [{ color: 'blue' }],
      showKnown: true,
      showText: true,
    };
    const userSettings = {
      main: {
        default: settings,
      },
    };
    const expected = {
      main: {
        current: settings,
        default: settings,
      },
    };
    expect(fillSettings(userSettings)).toEqual(expected);
  });

  it('should fill settings when main snapshot is missing', () => {
    const settings = {
      segmentOrder: [{ color: 'blue' }],
      showKnown: true,
      showText: true,
    };
    const userSettings = settings;
    const expected = {
      main: {
        current: settings,
        default: settings,
      },
    };
    expect(fillSettings(userSettings)).toEqual(expected);
  });

  it('should return defaults when no properties are defined', () => {
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
});
