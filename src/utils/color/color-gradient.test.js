import colorGradient from './color-gradient';

const gradients = {
  blue: ['#ffffff', '#ccd9ff', '#99b3ff', '#668cff', '#3366ff', '#0040ff', '#0033cc', '#002699', '#001966', '#000d33', '#000000'],
  blueRed: ['#0040ff', '#3366ff', '#668cff', '#99b3ff', '#ccd9ff', '#ffffff', '#ffcccc', '#ff9999', '#ff6666', '#ff3333', '#ff0000'],
  blueYellow: ['#0040ff', '#3366ff', '#668cff', '#99b3ff', '#ccd9ff', '#ffffff', '#ffffcc', '#ffff99', '#ffff66', '#ffff33', '#ffff00'],
  green: ['#ffffff', '#ccffcc', '#99ff99', '#66ff66', '#33ff33', '#00ff00', '#00cc00', '#009900', '#006600', '#003300', '#000000'],
  greyscale: ['#ffffff', '#e6e6e6', '#cccccc', '#b3b3b3', '#999999', '#808080', '#666666', '#4d4d4d', '#333333', '#1a1a1a', '#000000'],
  red: ['#ffffff', '#ffcccc', '#ff9999', '#ff6666', '#ff3333', '#ff0000', '#cc0000', '#990000', '#660000', '#330000', '#000000'],
  yellow: ['#ffffff', '#ffffcc', '#ffff99', '#ffff66', '#ffff33', '#ffff00', '#cccc00', '#999900', '#666600', '#333300', '#000000'],
};

describe('Color gradient', () => {
  it('generates blue-black color gradient', () => {
    expect(colorGradient('blue', 11, false)).toEqual(gradients.blue);
  });

  it('generates green-black color gradient', () => {
    expect(colorGradient('green', 11, false)).toEqual(gradients.green);
  });

  it('generates greyscale color gradient', () => {
    expect(colorGradient('greyscale', 11, false)).toEqual(gradients.greyscale);
  });

  it('generates red-black color gradient', () => {
    expect(colorGradient('red', 11, false)).toEqual(gradients.red);
  });

  it('generates yellow-black color gradient', () => {
    expect(colorGradient('yellow', 11, false)).toEqual(gradients.yellow);
  });

  it('generates blue-red color gradient', () => {
    expect(colorGradient('blueRed', 11, false)).toEqual(gradients.blueRed);
  });

  it('generates blue-yellow color gradient', () => {
    expect(colorGradient('blueYellow', 11, false)).toEqual(gradients.blueYellow);
  });

  it('generates default blue gradient', () => {
    expect(colorGradient('default', 11, false)).toEqual(gradients.blue);
  });

  it('generates inverted gradient', () => {
    expect(colorGradient('blue', 11, true)).toEqual(gradients.blue.reverse());
  });
});
