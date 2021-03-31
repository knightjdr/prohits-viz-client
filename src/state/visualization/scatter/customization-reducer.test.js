import reducer from './customization-reducer';
import * as actions from './customization-actions';
import * as displayActions from '../settings/display-actions';
import * as fileActions from '../data/interactive-file-actions';
import * as snapshotActions from '../data/snapshot-actions';

const defaultState = {};

describe('Customization reducer', () => {
  it('should handle ADD_GROUP action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [],
        id: 1,
        label: '',
        radius: 5,
      },
    };
    const action = {
      groups: [
        {
          color: '#ff0000',
          label: 'custom group 1',
          points: ['a', 'd'],
          radius: 5,
        },
      ],
      nextGroupID: 2,
      snapshotID: 'main',
      type: actions.ADD_GROUP,
    };
    const expectedState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
        ],
        id: 2,
        label: '',
        radius: 5,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle ADD_SNAPSHOT action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
        ],
        id: 2,
        label: '',
        radius: 5,
      },
    };
    const snapshotState = {
      color: '#ff0000',
      groups: [
        {
          color: '#ff0000',
          label: 'custom group 1',
          points: ['a', 'd'],
          radius: 5,
        },
      ],
      id: 2,
      label: '',
      radius: 5,
    };
    const action = {
      customization: snapshotState,
      name: 'snapshot-1',
      type: snapshotActions.ADD_SNAPSHOT,
    };
    const expectedState = {
      ...currentState,
      'snapshot-1': snapshotState,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_SCATTER_PLOT action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
        ],
        id: 2,
        label: 'my custom label',
        radius: 5,
      },
    };
    const action = {
      snapshotID: 'main',
      type: displayActions.CHANGE_SCATTER_PLOT,
    };
    const expectedState = {
      ...currentState,
      main: {
        color: '#ff0000',
        groups: [],
        id: 1,
        label: 'my custom label',
        radius: 5,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_INTERACTIVE_STATE action', () => {
    const action = {
      type: fileActions.CLEAR_INTERACTIVE_STATE,
    };
    const expectedState = {
      ...defaultState,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle DELETE_ALL_GROUPS action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
          {
            color: '#00ff00',
            label: 'custom group 2',
            points: ['b', 'c'],
            radius: 10,
          },
        ],
        id: 3,
        label: 'my custom label',
        radius: 10,
      },
    };
    const action = {
      snapshotID: 'main',
      type: actions.DELETE_ALL_GROUPS,
    };
    const expectedState = {
      main: {
        color: '#ff0000',
        groups: [],
        id: 1,
        label: 'my custom label',
        radius: 10,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_GROUP action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
          {
            color: '#00ff00',
            label: 'custom group 2',
            points: ['b', 'c'],
            radius: 10,
          },
        ],
        id: 3,
        label: 'my custom label',
        radius: 10,
      },
    };
    const action = {
      snapshotID: 'main',
      groupIndex: 0,
      type: actions.DELETE_GROUP,
    };
    const expectedState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#00ff00',
            label: 'custom group 2',
            points: ['b', 'c'],
            radius: 10,
          },
        ],
        id: 3,
        label: 'my custom label',
        radius: 10,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_POINT action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
        ],
        id: 2,
        label: 'my custom label',
        radius: 5,
      },
    };
    const action = {
      groupIndex: 0,
      label: 'a',
      snapshotID: 'main',
      type: actions.DELETE_POINT,
    };
    const expectedState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['d'],
            radius: 5,
          },
        ],
        id: 2,
        label: 'my custom label',
        radius: 5,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INTERACTIVE_STATE action when customization state is defined', () => {
    const action = {
      file: {
        customization: {
          main: {
            color: '#ff0000',
            groups: [
              {
                color: '#ff0000',
                label: 'custom group 1',
                points: ['a', 'd'],
                radius: 5,
              },
            ],
            id: 2,
            label: 'my custom label',
            radius: 5,
          },
        },
      },
      type: fileActions.LOAD_INTERACTIVE_STATE,
    };
    const expectedState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
        ],
        id: 2,
        label: 'my custom label',
        radius: 5,
      },
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_SNAPSHOT action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
        ],
        id: 2,
        label: 'my custom label',
        radius: 5,
      },
      snapshot1: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['b', 'c'],
            radius: 5,
          },
        ],
        id: 2,
        label: 'my custom label',
        radius: 10,
      },
    };
    const action = {
      name: 'snapshot1',
      type: snapshotActions.REMOVE_SNAPSHOT,
    };
    const expectedState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
        ],
        id: 2,
        label: 'my custom label',
        radius: 5,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_CUSTOMIZATION_SETTING action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [],
        id: 1,
        label: '',
        radius: 5,
      },
    };
    const action = {
      setting: 'color',
      snapshotID: 'main',
      type: actions.UPDATE_CUSTOMIZATION_SETTING,
      value: '#00ff00',
    };
    const expectedState = {
      main: {
        color: '#00ff00',
        groups: [],
        id: 1,
        label: '',
        radius: 5,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_GROUPS', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
          {
            color: '#00ff00',
            label: 'custom group 2',
            points: ['b', 'c'],
            radius: 10,
          },
        ],
        id: 3,
        label: 'my custom label',
        radius: 10,
      },
    };
    const action = {
      snapshotID: 'main',
      groups: [
        {
          color: '#ff0000',
          label: 'custom group 1',
          points: ['a', 'd', 'b'],
          radius: 5,
        },
        {
          color: '#00ff00',
          label: 'custom group 2',
          points: ['c'],
          radius: 10,
        },
      ],
      type: actions.UPDATE_GROUPS,
    };
    const expectedState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd', 'b'],
            radius: 5,
          },
          {
            color: '#00ff00',
            label: 'custom group 2',
            points: ['c'],
            radius: 10,
          },
        ],
        id: 3,
        label: 'my custom label',
        radius: 10,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_GROUP_SETTING action', () => {
    const currentState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#ff0000',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
          {
            color: '#00ff00',
            label: 'custom group 2',
            points: ['b', 'c'],
            radius: 10,
          },
        ],
        id: 3,
        label: 'my custom label',
        radius: 10,
      },
    };
    const action = {
      snapshotID: 'main',
      groupIndex: 0,
      setting: 'color',
      type: actions.UPDATE_GROUP_SETTING,
      value: '#0000ff',
    };
    const expectedState = {
      main: {
        color: '#ff0000',
        groups: [
          {
            color: '#0000ff',
            label: 'custom group 1',
            points: ['a', 'd'],
            radius: 5,
          },
          {
            color: '#00ff00',
            label: 'custom group 2',
            points: ['b', 'c'],
            radius: 10,
          },
        ],
        id: 3,
        label: 'my custom label',
        radius: 10,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
