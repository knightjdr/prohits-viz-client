import defineDimensions from './define-dimensions';

describe('Define dimensions for circheatmap', () => {
  it('should return dimensions when width is less than height', () => {
    const windowHeight = 1000;
    const windowWidth = 1100;

    const expected = {
      canTranslate: false,
      center: { x: 550, y: 440 },
      radius: 425,
      svgWidth: 1080,
      svgHeight: 880,
    };
    expect(defineDimensions(windowHeight, windowWidth)).toEqual(expected);
  });

  it('should return dimensions when height is less than width', () => {
    const windowHeight = 800;
    const windowWidth = 1100;

    const expected = {
      canTranslate: true,
      center: { x: 475, y: 365 },
      radius: 350,
      svgWidth: 930,
      svgHeight: 730,
    };
    expect(defineDimensions(windowHeight, windowWidth)).toEqual(expected);
  });
});
