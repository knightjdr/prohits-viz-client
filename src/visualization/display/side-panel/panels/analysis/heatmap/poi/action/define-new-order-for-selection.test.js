import defineNewOrderForSelection from './define-new-order-for-selection';

describe('Define new column/row order for selection', () => {
  it('should return POI array when it has items', () => {
    const poi = [0, 1];
    const unselected = [2, 3, 4];
    const expected = poi;
    expect(defineNewOrderForSelection(poi, unselected)).toEqual(expected);
  });

  it('should return unselected array when there are no POI', () => {
    const poi = [];
    const unselected = [0, 1, 2, 3, 4];
    const expected = unselected;
    expect(defineNewOrderForSelection(poi, unselected)).toEqual(expected);
  });
});
