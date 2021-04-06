import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './customization-actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Customization actions', () => {
  describe('add group', () => {
    describe('from list', () => {
      it('should dispatch an action to add a group using id', async () => {
        const state = {
          customization: {
            main: {
              color: '#ff0000',
              groups: [],
              id: 1,
              label: '',
              radius: 5,
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

        const label = '';
        const list = ['a', 'd'];

        const expectedActions = [{
          AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
          groups: [
            {
              color: '#ff0000',
              label: 'custom group 1',
              points: ['a', 'd'],
              radius: 5,
            },
          ],
          nextGroupID: 2,
          noTotalPoints: 4,
          type: actions.ADD_GROUP,
        }];
        await store.dispatch(actions.addGroupFromList(list, label));
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('should dispatch an action to add a group using custom label', async () => {
        const state = {
          customization: {
            main: {
              color: '#ff0000',
              groups: [],
              id: 1,
              label: '',
              radius: 5,
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

        const label = 'my label';
        const list = ['a', 'd'];

        const expectedActions = [{
          AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
          groups: [
            {
              color: '#ff0000',
              label: 'my label',
              points: ['a', 'd'],
              radius: 5,
            },
          ],
          nextGroupID: 2,
          noTotalPoints: 4,
          type: actions.ADD_GROUP,
        }];
        await store.dispatch(actions.addGroupFromList(list, label));
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('should not dispatch an action to add a group when no points are selected', async () => {
        const state = {
          customization: {
            main: {
              color: '#ff0000',
              groups: [],
              id: 1,
              label: '',
              radius: 5,
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

        const label = '';
        const list = [];

        const expectedActions = [];
        await store.dispatch(actions.addGroupFromList(list, label));
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    describe('from POI', () => {
      it('should dispatch an action to add a group using id', async () => {
        const state = {
          customization: {
            main: {
              color: '#ff0000',
              groups: [],
              id: 1,
              label: '',
              radius: 5,
            },
          },
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
          groups: [
            {
              color: '#ff0000',
              label: 'custom group 1',
              points: ['a', 'd'],
              radius: 5,
            },
          ],
          nextGroupID: 2,
          noTotalPoints: 4,
          type: actions.ADD_GROUP,
        }];
        await store.dispatch(actions.addGroupFromPOI());
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('should dispatch an action to add a group using custom label', async () => {
        const state = {
          customization: {
            main: {
              color: '#ff0000',
              groups: [],
              id: 1,
              label: 'my label',
              radius: 5,
            },
          },
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
          groups: [
            {
              color: '#ff0000',
              label: 'my label',
              points: ['a', 'd'],
              radius: 5,
            },
          ],
          nextGroupID: 1,
          noTotalPoints: 4,
          type: actions.ADD_GROUP,
        }];
        await store.dispatch(actions.addGroupFromPOI());
        expect(store.getActions()).toEqual(expectedActions);
      });

      it('should not dispatch an action to add a group when no points are selected', async () => {
        const state = {
          customization: {
            main: {
              color: '#ff0000',
              groups: [],
              id: 1,
              label: '',
              radius: 5,
            },
          },
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
        await store.dispatch(actions.addGroupFromPOI());
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  it('should dispatch an action to delete all groups', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.DELETE_ALL_GROUPS,
    };
    expect(actions.deleteAllGroups()).toEqual(expectedAction);
  });

  it('should dispatch an action to delete a group', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      groupIndex: 2,
      type: actions.DELETE_GROUP,
    };
    expect(actions.deleteGroup(2)).toEqual(expectedAction);
  });

  it('should dispatch an action to delete a point', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      groupIndex: 2,
      label: 'a',
      type: actions.DELETE_POINT,
    };
    expect(actions.deletePoint(2, 'a')).toEqual(expectedAction);
  });

  it('should dispatch an action to update groups', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      groups: [],
      type: actions.UPDATE_GROUPS,
    };
    expect(actions.updateGroups([])).toEqual(expectedAction);
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

  it('should dispatch an action to update a group setting', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      groupIndex: 2,
      setting: 'color',
      type: actions.UPDATE_GROUP_SETTING,
      value: '#00ffff',
    };
    expect(actions.updateGroupSetting(2, 'color', '#00ffff')).toEqual(expectedAction);
  });
});
