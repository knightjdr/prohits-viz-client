import fillSettings,
{
  defaultState,
  validateLogAxis,
  validateSettings,
  validateTicks,
} from './settings';

describe('Default settings scatterplot', () => {
  describe('Validate log axis', () => {
    it('should return true when the axis value is not a boolean but the log base is set', () => {
      const defaultLogAxis = false;
      const logAxis = null;
      const logBase = '2';
      expect(validateLogAxis(logBase, logAxis, defaultLogAxis)).toBeTruthy();
    });

    it('should return the axis value when it is a boolean and the log base is set', () => {
      const defaultLogAxis = false;
      const logAxis = false;
      const logBase = '2';
      expect(validateLogAxis(logBase, logAxis, defaultLogAxis)).toBeFalsy();
    });

    it('should return the axis value when it is a boolean and log base is "none"', () => {
      const defaultLogAxis = false;
      const logAxis = true;
      const logBase = 'none';
      expect(validateLogAxis(logBase, logAxis, defaultLogAxis)).toBeTruthy();
    });

    it('should return the default value', () => {
      const defaultLogAxis = false;
      const logAxis = null;
      const logBase = 'none';
      expect(validateLogAxis(logBase, logAxis, defaultLogAxis)).toBeFalsy();
    });
  });

  describe('Validate ticks', () => {
    it('should return default array when tick argument is null', () => {
      const field = 'xTicks';
      const settings = {
        logBase: 'none',
        logX: false,
        logY: false,
        xTicks: null,
      };
      const expected = [];
      expect(validateTicks(field, settings)).toEqual(expected);
    });

    it('should return input array filtered and sorted for numbers', () => {
      const field = 'xTicks';
      const settings = {
        logBase: 'none',
        logX: false,
        logY: false,
        xTicks: [0, '10', 5, 15],
      };
      const expected = [0, 5, 10, 15];
      expect(validateTicks(field, settings)).toEqual(expected);
    });

    it('should return input array filtered and sorted for log axis', () => {
      const field = 'xTicks';
      const settings = {
        logBase: '2',
        logX: true,
        logY: false,
        xTicks: [1, -2, 0, 0, 'a', '8', 4],
      };
      const expected = [-2, 1, 4, 8];
      expect(validateTicks(field, settings)).toEqual(expected);
    });
  });

  describe('Validate settings', () => {
    it('should return user-defined settings when valid', () => {
      const userSettings = {
        equalScaleAxes: true,
        fontSize: 14,
        logBase: '2',
        logX: true,
        logY: true,
        radius: 6,
        xFilter: 1,
        yFilter: 1,
        xTicks: [1, 2, 4, 8],
        yTicks: [1, 2, 4],
        otherField: 1,
      };
      const expected = userSettings;
      expect(validateSettings(userSettings)).toEqual(expected);
    });

    it('should return defaults when user-defined settings invalid', () => {
      const userSettings = {
        equalScaleAxes: 'true',
        fontSize: '14',
        logBase: '3',
        logX: 'true',
        logY: 'true',
        radius: '6',
        xFilter: '1',
        yFilter: '1',
        xTicks: null,
        yTicks: null,
      };
      const expected = defaultState;
      expect(validateSettings(userSettings)).toEqual(expected);
    });
  });

  describe('Fill settings', () => {
    it('should return user-defined settings when valid', () => {
      const settings = {
        equalScaleAxes: true,
        fontSize: 14,
        logBase: '2',
        logX: true,
        logY: true,
        radius: 6,
        xFilter: 1,
        yFilter: 1,
        xTicks: [1, 2, 4, 8],
        yTicks: [1, 2, 4],
        otherField: 1,
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

    it('should set current settings to defaults when current key is missing', () => {
      const settings = {
        equalScaleAxes: true,
        fontSize: 14,
        logBase: '2',
        logX: true,
        logY: true,
        radius: 6,
        xFilter: 1,
        yFilter: 1,
        xTicks: [1, 2, 4, 8],
        yTicks: [1, 2, 4],
        otherField: 1,
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
        equalScaleAxes: true,
        fontSize: 14,
        logBase: '2',
        logX: true,
        logY: true,
        radius: 6,
        xFilter: 1,
        yFilter: 1,
        xTicks: [1, 2, 4, 8],
        yTicks: [1, 2, 4],
        otherField: 1,
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
});
