import RGBtoHex from './rgb-to-hex';

describe('RGBtoHex', () => {
  test('converts rgb tuples to hex', () => {
    expect(RGBtoHex(0, 0, 0)).toBe('#000000');
    expect(RGBtoHex(0, 0, 0)).toBe('#000000');
    expect(RGBtoHex(51, 107, 135)).toBe('#336b87');
    expect(RGBtoHex(144, 175, 197)).toBe('#90afc5');
    expect(RGBtoHex(42, 49, 50)).toBe('#2a3132');
  });
});
