import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './readouts-actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Readouts actions', () => {
  it('should dispatch an action to filter and sort readouts', async () => {
    const settings = { sortByKnown: false };

    const state = {
      circles: {
        main: {
          order: [{ attribute: 'a' }],
        },
      },
      settings: {
        main: {
          current: {
            sortByKnown: true,
            maxReadouts: 10,
            readoutIDs: [],
          },
        },
      },
      tabs: { activeSnapshot: 'main' },
    };
    const store = mockStore(state);

    const expectedActions = [{
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      circles: [{ attribute: 'a' }],
      maxReadouts: 10,
      readoutIDs: [],
      sortByKnown: false,
      type: actions.FILTER_READOUTS,
    }];
    await store.dispatch(actions.filterAndSortReadouts(settings));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
