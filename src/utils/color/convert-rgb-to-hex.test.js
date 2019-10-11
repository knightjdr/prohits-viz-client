import convertRGBtoHex from './convert-rgb-to-hex';

describe('Convert RGB to hexadecimal', () => {
  it('should convert RGB tuples to hex', () => {
    expect(convertRGBtoHex(0, 0, 0)).toBe('#000000');
    expect(convertRGBtoHex(0, 0, 0)).toBe('#000000');
    expect(convertRGBtoHex(51, 107, 135)).toBe('#336b87');
    expect(convertRGBtoHex(144, 175, 197)).toBe('#90afc5');
    expect(convertRGBtoHex(42, 49, 50)).toBe('#2a3132');
  });
});
