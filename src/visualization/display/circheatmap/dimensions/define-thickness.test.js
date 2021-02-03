import defineThickness from './define-thickness';

describe('Define circheatmap thickness', () => {
  it('should return desired thickness when compatible with svg size', () => {
    const desiredThickness = 50;
    const numCircles = 3;
    const svgSize = 500;

    const expected = desiredThickness;
    expect(defineThickness(numCircles, svgSize, desiredThickness)).toBe(expected);
  });

  it('should return maximum thickness when desired is too large with svg size', () => {
    const desiredThickness = 50;
    const numCircles = 3;
    const svgSize = 400;

    const expected = 42;
    expect(defineThickness(numCircles, svgSize, desiredThickness)).toBe(expected);
  });
});
