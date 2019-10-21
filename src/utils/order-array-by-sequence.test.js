import orderArrayBySequence from './order-array-by-sequence';

describe('Order array by sequence', () => {
  it('should order array by sequence when sequence is equal in length or shorter', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const tests = [
      { expected: ['c', 'a', 'd'], sequence: [2, 0, 3] },
      { expected: ['b', 'd', 'c', 'a'], sequence: [1, 3, 2, 0] },

    ];
    tests.forEach((test) => {
      expect(orderArrayBySequence(arr, test.sequence)).toEqual(test.expected);
    });
  });

  it('should order array by sequence when sequence is longer', () => {
    const arr = ['a', 'b', 'c'];
    const sequence = [2, 0, 1, 3];
    const expected = ['c', 'a', 'b'];
    expect(orderArrayBySequence(arr, sequence)).toEqual(expected);
  });
});
