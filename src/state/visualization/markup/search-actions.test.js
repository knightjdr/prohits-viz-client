import * as actions from './search-actions';

describe('Search status actions', () => {
  it('should dispatch an action to clear search status', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.CLEAR_SEARCH,
    };
    expect(actions.clearSearchStatus()).toEqual(expectedAction);
  });

  it('should dispatch an action to set search status for heat maps', () => {
    const results = {
      columns: { a: true, aa: true },
      dimensions: {
        scrollLeft: 10,
        scrollTop: 20,
        scrollUpdate: true,
      },
      match: true,
      position: { x: 5, y: 10 },
      rows: { aaa: true },
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      dimensions: {
        scrollLeft: 10,
        scrollTop: 20,
        scrollUpdate: true,
      },
      results,
      term: 'a',
      type: actions.SET_SEARCH_STATUS_HEATMAP,
      x: results.position.x,
      y: results.position.y,
    };
    expect(actions.setSearchStatusHeatmap('a', results)).toEqual(expectedAction);
  });

  it('should dispatch an action to set search status for scatter plots', () => {
    const results = {
      labels: { a: true, ab: true },
      match: true,
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      results,
      term: 'a',
      type: actions.SET_SEARCH_STATUS_SCATTER,
    };
    expect(actions.setSearchStatusScatter('a', results)).toEqual(expectedAction);
  });
});
