import findOptionToFocus from './find-option-to-focus';

describe('Find closest item in an array', () => {
  it('should return item matching index when available', () => {
    const allIndices = [3, 1, 0, 2];
    const indicesForFocus = [3, 1, 0, 2];
    const startIndex = 0;
    expect(findOptionToFocus(allIndices, indicesForFocus, startIndex)).toBe(0);
  });

  it('should find the next closest item when requested index is not available', () => {
    const allIndices = [3, 1, 0, 4, 2];
    const indicesForFocus = [3, 4, 2];
    const startIndex = 2;
    expect(findOptionToFocus(allIndices, indicesForFocus, startIndex)).toBe(1);
  });

  it('should return the last item when specified index is not present and limit is reached', () => {
    const allIndices = [3, 1, 0, 4, 2];
    const indicesForFocus = [3];
    const startIndex = 1;
    expect(findOptionToFocus(allIndices, indicesForFocus, startIndex)).toBe(0);
  });
});
