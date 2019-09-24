import * as actions from './selection-actions';

describe('Selection actions', () => {
  it('should dispatch an action to update selections', () => {
    const expectedAction = {
      selections: {},
      type: actions.UPDATE_SELECTIONS,
    };
    expect(actions.updateSelections({})).toEqual(expectedAction);
  });
});
