import defineDimensions from './define-dimensions';

describe('define scatter plot dimensions', () => {
  it('should set dimensions when available height is greater than width', () => {
    const windowHeight = 1001;
    const windowWidth = 1000;

    const expected = {
      canTranslate: false,
      plot: 850,
      wrapper: 950,
    };
    expect(defineDimensions(windowHeight, windowWidth)).toEqual(expected);
  });

  it('should set dimensions when available width is greater than height', () => {
    const windowHeight = 1000;
    const windowWidth = 1001;

    const expected = {
      canTranslate: true,
      plot: 810,
      wrapper: 910,
    };
    expect(defineDimensions(windowHeight, windowWidth)).toEqual(expected);
  });
});
