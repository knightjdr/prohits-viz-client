import * as actions from './marker-actions';

describe('Marker actions', () => {
  it('should dispatch an action to add a marker to list', () => {
    const dimensions = {
      height: 20,
      width: 100,
      x: 0.5,
      y: 0.5,
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      dimensions,
      id: 'id',
      type: actions.ADD_MARKER,
    };
    expect(actions.addMarker('id', dimensions)).toEqual(expectedAction);
  });

  it('should dispatch an action to change marker setting', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      setting: 'color',
      type: actions.CHANGE_MARKER_SETTING,
      value: '#ff0000',
    };
    expect(actions.changeMarkerSetting('color', '#ff0000')).toEqual(expectedAction);
  });

  it('should dispatch an action to clear all markers', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.CLEAR_ALL_MARKERS,
    };
    expect(actions.clearAllMarkers()).toEqual(expectedAction);
  });

  it('should dispatch an action to update marker list', () => {
    const list = {
      testID: {
        height: 30,
        width: 100,
        x: 0.1,
        y: 0.2,
      },
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      list,
      type: actions.UPDATE_MARKERS,
    };
    expect(actions.updateMarkers(list)).toEqual(expectedAction);
  });
});
