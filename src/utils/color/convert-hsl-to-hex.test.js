import convertHSLtoHex from './convert-hsl-to-hex';

describe('Convert HSL to hexadecimal', () => {
  it('should convert HSL values to hex', () => {
    expect(convertHSLtoHex({ h: 0, s: 1, l: 0.5 })).toBe('#ff0000');
    expect(convertHSLtoHex({ h: 120 / 360, s: 1, l: 0.5 })).toBe('#00ff00');
    expect(convertHSLtoHex({ h: 240 / 360, s: 1, l: 0.5 })).toBe('#0000ff');
    expect(convertHSLtoHex({ h: 187 / 360, s: 0.09, l: 0.18 })).toBe('#2a3132');
    expect(convertHSLtoHex({ h: 205 / 360, s: 0.31, l: 0.67 })).toBe('#91afc5');
    expect(convertHSLtoHex({ h: 200 / 360, s: 0.45, l: 0.36 })).toBe('#326a85');
    expect(convertHSLtoHex({ h: 1, s: 0.45, l: 0.8 })).toBe('#e3b5b5');
  });
});
