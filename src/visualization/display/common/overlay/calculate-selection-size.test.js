import calculateSelectionSize from './calculate-selection-size';

describe('Name of the group', () => {
  it('should return 0 for the dimensions when starting position is null', () => {
    const startingPosition = null;
    const currentPosition = {
      x: 25,
      y: 50,
    };
    const expected = {
      height: 0,
      width: 0,
    };
    expect(calculateSelectionSize(startingPosition, currentPosition)).toEqual(expected);
  });

  it('should return dimensions when starting position is defined', () => {
    const startingPosition = {
      x: 10,
      y: 5,
    };
    const currentPosition = {
      x: 25,
      y: 50,
    };
    const expected = {
      height: 45,
      width: 15,
    };
    expect(calculateSelectionSize(startingPosition, currentPosition)).toEqual(expected);
  });
});
