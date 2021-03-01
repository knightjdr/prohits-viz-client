import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './display-actions';
import * as settingActions from './settings-actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Display actions', () => {
  describe('change scatter plot', () => {
    it('should dispatch an action to change the plot', async () => {
      const plotIndex = 1;

      const state = {
        display: { main: { selectedPlot: 0 } },
        plots: [
          { points: [1, 2, 3] },
          { points: [4, 5, 6] },
        ],
        settings: {
          main: {
            current: { xFilter: 0, yFilter: 10 },
          },
        },
        tabs: { activeSnapshot: 'main' },
      };
      const store = mockStore(state);

      const expectedActions = [{
        AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
        filters: { x: 0, y: 10 },
        points: [4, 5, 6],
        setting: 'selectedPlot',
        type: actions.CHANGE_SCATTER_PLOT,
        value: 1,
      }];
      await store.dispatch(actions.changeScatterPlot(plotIndex));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should not dispatch an action to change the plot when index is the same', async () => {
      const plotIndex = 0;

      const state = {
        display: { main: { selectedPlot: 0 } },
        tabs: { activeSnapshot: 'main' },
      };
      const store = mockStore(state);

      const expectedActions = [];
      await store.dispatch(actions.changeScatterPlot(plotIndex));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('change circheatmap plot', () => {
    it('should dispatch an action to change the plot', async () => {
      const plotIndex = 1;

      const state = {
        circles: {
          main: {
            order: [{ attribute: 'circle1' }],
          },
        },
        display: { main: { selectedPlot: 0 } },
        plots: [
          { readouts: [1, 2, 3] },
          { readouts: [4, 5, 6] },
        ],
        settings: {
          main: {
            current: { sortByKnown: true },
          },
        },
        tabs: { activeSnapshot: 'main' },
      };
      const store = mockStore(state);

      const expectedActions = [
        {
          AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
          circles: [{ attribute: 'circle1' }],
          readouts: [4, 5, 6],
          setting: 'selectedPlot',
          sortByKnown: true,
          type: actions.CHANGE_CIRCHEATMAP_PLOT,
          value: 1,
        },
        {
          AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
          setting: 'maxReadouts',
          type: settingActions.UPDATE_SETTING,
          value: 3,
        },
      ];
      await store.dispatch(actions.changeCircHeatmapPlot(plotIndex));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should not dispatch an action to change the plot when index is the same', async () => {
      const plotIndex = 0;

      const state = {
        display: { main: { selectedPlot: 0 } },
        tabs: { activeSnapshot: 'main' },
      };
      const store = mockStore(state);

      const expectedActions = [];
      await store.dispatch(actions.changeCircHeatmapPlot(plotIndex));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch an action to reset circheatmap image', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_CIRCHEATMAP,
    };
    expect(actions.resetCircheatmap()).toEqual(expectedAction);
  });

  it('should dispatch an action to reset heatmap image', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_HEATMAP,
    };
    expect(actions.resetHeatmap()).toEqual(expectedAction);
  });

  it('should dispatch an action to reset scatter', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_SCATTER,
      value: {},
    };
    expect(actions.resetScatter({})).toEqual(expectedAction);
  });

  it('should dispatch an action to reset scatter transformations', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.RESET_SCATTER_TRANSFORMATIONS,
      value: {},
    };
    expect(actions.resetScatterTransformations({})).toEqual(expectedAction);
  });

  it('should dispatch an action to update a display setting', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      setting: 'plotFixed',
      type: actions.UPDATE_DISPLAY_SETTING,
      value: true,
    };
    expect(actions.updateDisplaySetting('plotFixed', true)).toEqual(expectedAction);
  });
});
