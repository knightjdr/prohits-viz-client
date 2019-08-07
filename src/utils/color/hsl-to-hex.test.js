import HSLtoHex from './hsl-to-hex';

describe('HSLtoHex', () => {
  test('converts HSL values to Hex', () => {
    expect(HSLtoHex({ h: 0, s: 1, l: 0.5 })).toBe('#ff0000');
    expect(HSLtoHex({ h: 120 / 360, s: 1, l: 0.5 })).toBe('#00ff00');
    expect(HSLtoHex({ h: 240 / 360, s: 1, l: 0.5 })).toBe('#0000ff');
    expect(HSLtoHex({ h: 187 / 360, s: 0.09, l: 0.18 })).toBe('#2a3132');
    expect(HSLtoHex({ h: 205 / 360, s: 0.31, l: 0.67 })).toBe('#91afc5');
    expect(HSLtoHex({ h: 200 / 360, s: 0.45, l: 0.36 })).toBe('#326a85');
    expect(HSLtoHex({ h: 1, s: 0.45, l: 0.8 })).toBe('#e3b5b5');
  });
});
