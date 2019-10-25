import * as actions from './search-actions';

describe('Search status actions', () => {
  it('should dispatch an action to clear search status', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      type: actions.CLEAR_SEARCH,
    };
    expect(actions.clearSearchStatus()).toEqual(expectedAction);
  });

  it('should dispatch an action to set search status', () => {
    const results = {
      columns: { a: true, aa: true },
      match: true,
      position: { x: 5, y: 10 },
      rows: { aaa: true },
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      results,
      term: 'a',
      type: actions.SET_SEARCH_STATUS,
      x: results.position.x,
      y: results.position.y,
    };
    expect(actions.setSearchStatus('a', results)).toEqual(expectedAction);
  });
});
