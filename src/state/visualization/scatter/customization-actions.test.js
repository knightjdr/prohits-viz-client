import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './customization-actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Customization actions', () => {
  describe('add points', () => {
    it('should dispatch an action to add points', async () => {
      const color = '#ff0000';
      const radius = 5;

      const state = {
        poi: {
          main: {
            points: [0, 3],
          },
        },
        points: {
          main: {
            current: [
              { label: 'a' },
              { label: 'b' },
              { label: 'c' },
              { label: 'd' },
            ],
          },
        },
        tabs: { activeSnapshot: 'main' },
      };
      const store = mockStore(state);

      const expectedActions = [{
        AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
        points: {
          a: { color: '#ff0000', radius: 5 },
          d: { color: '#ff0000', radius: 5 },
        },
        noTotalPoints: 4,
        type: actions.ADD_POINTS,
      }];
      await store.dispatch(actions.addPoints(color, radius));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should not dispatch an action to add points when none are selected', async () => {
      const color = '#ff0000';
      const radius = 5;

      const state = {
        poi: {
          main: {
            points: [],
          },
        },
        points: {
          main: {
            current: [
              { label: 'a' },
              { label: 'b' },
              { label: 'c' },
              { label: 'd' },
            ],
          },
        },
        tabs: { activeSnapshot: 'main' },
      };
      const store = mockStore(state);

      const expectedActions = [];
      await store.dispatch(actions.addPoints(color, radius));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an action to delete all points', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.DELETE_ALL_POINTS,
    };
    expect(actions.deleteAllPoints()).toEqual(expectedAction);
  });

  it('should dispatch an action to delete a point', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      label: 'labelA',
      type: actions.DELETE_POINT,
    };
    expect(actions.deletePoint('labelA')).toEqual(expectedAction);
  });

  it('should dispatch an action to update a point', () => {
    const parameters = {
      color: '#ff0000',
      radius: 5,
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      label: 'labelA',
      parameters,
      type: actions.UPDATE_POINT,
    };
    expect(actions.updatePoint('labelA', parameters)).toEqual(expectedAction);
  });

  it('should dispatch an action to update a setting', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      setting: 'color',
      type: actions.UPDATE_CUSTOMIZATION_SETTING,
      value: '#00ffff',
    };
    expect(actions.updateCustomizationSetting('color', '#00ffff')).toEqual(expectedAction);
  });
});
