import * as actions from './poi-actions';

describe('POI actions', () => {
  it('should dispatch an action to add to update POI', () => {
    const poi = {
      columns: [2],
      rows: [5, 1],
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      poi,
      type: actions.UPDATE_POI,
    };
    expect(actions.updatePOI(poi)).toEqual(expectedAction);
  });
});
