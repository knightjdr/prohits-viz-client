import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './points-actions';
import * as settingActions from '../settings/settings-actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Points actions', () => {
  describe('filter points', () => {
    it('should dispatch an action to filter points by x axis', async () => {
      const filter = 'xFilter';
      const value = 10;

      const state = {
        settings: {
          main: {
            current: {
              xFilter: 0,
              yFilter: 5,
            },
          },
        },
        tabs: { activeSnapshot: 'main' },
      };
      const store = mockStore(state);

      const expectedActions = [
        {
          AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
          type: actions.FILTER_POINTS,
          x: 10,
          y: 5,
        },
        {
          AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
          setting: 'xFilter',
          type: settingActions.UPDATE_SETTING,
          value: 10,
        },
      ];
      await store.dispatch(actions.filterPoints(filter, value));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should dispatch an action to filter points by y axis', async () => {
      const filter = 'yFilter';
      const value = 10;

      const state = {
        settings: {
          main: {
            current: {
              xFilter: 0,
              yFilter: 5,
            },
          },
        },
        tabs: { activeSnapshot: 'main' },
      };
      const store = mockStore(state);

      const expectedActions = [
        {
          AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
          type: actions.FILTER_POINTS,
          x: 0,
          y: 10,
        },
        {
          AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
          setting: 'yFilter',
          type: settingActions.UPDATE_SETTING,
          value: 10,
        },
      ];
      await store.dispatch(actions.filterPoints(filter, value));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
