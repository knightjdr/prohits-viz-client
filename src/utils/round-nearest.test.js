import RoundNearest from './round-nearest';

describe('Round nearest', () => {
  it('should round to the nearest specified value', () => {
    const inputValues = [75, 21, 3, 45];
    const roundTo = [13, 4, 2, 7];
    const results = inputValues.map((value, index) => RoundNearest(value, roundTo[index]));
    const expectedResults = [78, 20, 4, 42];
    expect(results).toEqual(expectedResults);
  });
});
