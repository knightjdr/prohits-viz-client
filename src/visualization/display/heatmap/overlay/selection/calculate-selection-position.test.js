import calculateSelectionPosition from './calculate-selection-position';

describe('Calculate selection position', () => {
  it('should return current position when selection begins', () => {
    const currentPosition = {
      x: 50,
      y: 75,
    };
    const startingPosition = null;
    const expected = currentPosition;
    expect(calculateSelectionPosition(startingPosition, currentPosition)).toEqual(expected);
  });

  it('should return starting position when both height and width are positive', () => {
    const currentPosition = {
      x: 50,
      y: 75,
    };
    const startingPosition = {
      x: 25,
      y: 30,
    };
    const expected = startingPosition;
    expect(calculateSelectionPosition(startingPosition, currentPosition)).toEqual(expected);
  });

  it('should return current position when both height and width are negative', () => {
    const currentPosition = {
      x: 5,
      y: 10,
    };
    const startingPosition = {
      x: 25,
      y: 30,
    };
    const expected = {
      x: 5,
      y: 10,
    };
    expect(calculateSelectionPosition(startingPosition, currentPosition)).toEqual(expected);
  });

  it('should return current y position when height is negative', () => {
    const currentPosition = {
      x: 50,
      y: 10,
    };
    const startingPosition = {
      x: 25,
      y: 30,
    };
    const expected = {
      x: 25,
      y: 10,
    };
    expect(calculateSelectionPosition(startingPosition, currentPosition)).toEqual(expected);
  });

  it('should return current x position when width is negative', () => {
    const currentPosition = {
      x: 5,
      y: 75,
    };
    const startingPosition = {
      x: 25,
      y: 30,
    };
    const expected = {
      x: 5,
      y: 30,
    };
    expect(calculateSelectionPosition(startingPosition, currentPosition)).toEqual(expected);
  });
});
