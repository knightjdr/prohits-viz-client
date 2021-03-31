import * as keyCodes from './pressed-key-code';

const keys = {
  ArrowDown: 40,
  ArrowUp: 38,
  Backspace: 8,
  Delete: 46,
  End: 35,
  Enter: 13,
  Escape: 27,
  Home: 36,
  Space: 32,
};

describe('Pressed key code', () => {
  it('should return true when key pressed via "keyCode" property', () => {
    Object.entries(keys).forEach(([key, value]) => {
      const e = {
        keyCode: value,
      };
      const func = `pressed${key}`;
      expect(keyCodes[func](e)).toBeTruthy();
    });
  });

  it('should return true when key pressed via "which" property', () => {
    Object.entries(keys).forEach(([key, value]) => {
      const e = {
        which: value,
      };
      const func = `pressed${key}`;
      expect(keyCodes[func](e)).toBeTruthy();
    });
  });

  it('should return false when key not pressed via "keyCode" property', () => {
    Object.entries(keys).forEach(([key]) => {
      const e = {
        keyCode: 9,
      };
      const func = `pressed${key}`;
      expect(keyCodes[func](e)).toBeFalsy();
    });
  });

  it('should return false when key not pressed via "which" property', () => {
    Object.entries(keys).forEach(([key]) => {
      const e = {
        which: 9,
      };
      const func = `pressed${key}`;
      expect(keyCodes[func](e)).toBeFalsy();
    });
  });
});
