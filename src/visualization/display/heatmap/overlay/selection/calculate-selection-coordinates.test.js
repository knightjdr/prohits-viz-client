import calculateSelectionCoordinates from './calculate-selection-coordinates';

describe('Calculate selection coordinates', () => {
  it('should return current coordinates when selection begins', () => {
    const currentCoordinates = {
      x: 50,
      y: 75,
    };
    const startingCoordinates = null;
    const expected = currentCoordinates;
    expect(calculateSelectionCoordinates(startingCoordinates, currentCoordinates)).toEqual(expected);
  });

  it('should return starting coordinates when both height and width are positive', () => {
    const currentCoordinates = {
      x: 50,
      y: 75,
    };
    const startingCoordinates = {
      x: 25,
      y: 30,
    };
    const expected = startingCoordinates;
    expect(calculateSelectionCoordinates(startingCoordinates, currentCoordinates)).toEqual(expected);
  });

  it('should return current coordinates when both height and width are negative', () => {
    const currentCoordinates = {
      x: 5,
      y: 10,
    };
    const startingCoordinates = {
      x: 25,
      y: 30,
    };
    const expected = {
      x: 5,
      y: 10,
    };
    expect(calculateSelectionCoordinates(startingCoordinates, currentCoordinates)).toEqual(expected);
  });

  it('should return current y coordinate when height is negative', () => {
    const currentCoordinates = {
      x: 50,
      y: 10,
    };
    const startingCoordinates = {
      x: 25,
      y: 30,
    };
    const expected = {
      x: 25,
      y: 10,
    };
    expect(calculateSelectionCoordinates(startingCoordinates, currentCoordinates)).toEqual(expected);
  });

  it('should return current x coordinate when width is negative', () => {
    const currentCoordinates = {
      x: 5,
      y: 75,
    };
    const startingCoordinates = {
      x: 25,
      y: 30,
    };
    const expected = {
      x: 5,
      y: 30,
    };
    expect(calculateSelectionCoordinates(startingCoordinates, currentCoordinates)).toEqual(expected);
  });
});
