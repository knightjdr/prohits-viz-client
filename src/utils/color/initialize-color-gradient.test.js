import initializeColorGradient from './initialize-color-gradient';

const gradients = {
  blue: ['#ffffff', '#ccd9ff', '#99b3ff', '#668cff', '#3366ff', '#0040ff', '#0033cc', '#002699', '#001966', '#000d33', '#000000'],
  blueRed: ['#0040ff', '#3366ff', '#668cff', '#99b3ff', '#ccd9ff', '#ffffff', '#ffcccc', '#ff9999', '#ff6666', '#ff3333', '#ff0000'],
  blueYellow: ['#0040ff', '#3366ff', '#668cff', '#99b3ff', '#ccd9ff', '#ffffff', '#ffffcc', '#ffff99', '#ffff66', '#ffff33', '#ffff00'],
  green: ['#ffffff', '#ccffcc', '#99ff99', '#66ff66', '#33ff33', '#00ff00', '#00cc00', '#009900', '#006600', '#003300', '#000000'],
  greyscale: ['#ffffff', '#e6e6e6', '#cccccc', '#b3b3b3', '#999999', '#808080', '#666666', '#4d4d4d', '#333333', '#1a1a1a', '#000000'],
  red: ['#ffffff', '#ffcccc', '#ff9999', '#ff6666', '#ff3333', '#ff0000', '#cc0000', '#990000', '#660000', '#330000', '#000000'],
  yellow: ['#ffffff', '#ffffcc', '#ffff99', '#ffff66', '#ffff33', '#ffff00', '#cccc00', '#999900', '#666600', '#333300', '#000000'],
};

describe('Initialize color gradient', () => {
  it('should generate a blue-black color gradient', () => {
    expect(initializeColorGradient('blue', 11, false)).toEqual(gradients.blue);
  });

  it('should generate a green-black color gradient', () => {
    expect(initializeColorGradient('green', 11, false)).toEqual(gradients.green);
  });

  it('should generate a greyscale color gradient', () => {
    expect(initializeColorGradient('greyscale', 11, false)).toEqual(gradients.greyscale);
  });

  it('should generate a red-black color gradient', () => {
    expect(initializeColorGradient('red', 11, false)).toEqual(gradients.red);
  });

  it('should generate a yellow-black color gradient', () => {
    expect(initializeColorGradient('yellow', 11, false)).toEqual(gradients.yellow);
  });

  it('should generate a blue-red color gradient', () => {
    expect(initializeColorGradient('blueRed', 11, false)).toEqual(gradients.blueRed);
  });

  it('should generate a blue-yellow color gradient', () => {
    expect(initializeColorGradient('blueYellow', 11, false)).toEqual(gradients.blueYellow);
  });

  it('should generate a default blue gradient', () => {
    expect(initializeColorGradient('default', 11, false)).toEqual(gradients.blue);
  });

  it('should generate a inverted gradient', () => {
    expect(initializeColorGradient('blue', 11, true)).toEqual(gradients.blue.reverse());
  });
});
