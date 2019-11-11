import * as actions from './annotation-actions';

describe('Annotation actions', () => {
  it('should dispatch an action to add an annotation to list', () => {
    const position = {
      x: 0.5,
      y: 0.5,
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      id: 'id',
      position,
      text: 'test annotation',
      type: actions.ADD_ANNOTATION,
    };
    expect(actions.addAnnotation('id', 'test annotation', position)).toEqual(expectedAction);
  });

  it('should dispatch an action to clear all annotations', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.CLEAR_ALL_ANNOTATIONS,
    };
    expect(actions.clearAllAnnotations()).toEqual(expectedAction);
  });

  it('should dispatch an action to change annotation setting', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      setting: 'color',
      type: actions.CHANGE_ANNOTATION_SETTING,
      value: '#ff0000',
    };
    expect(actions.changeAnnotationSetting('color', '#ff0000')).toEqual(expectedAction);
  });

  it('should dispatch an action to toggle showing annotations', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      show: false,
      type: actions.TOGGLE_ANNOTATIONS,
    };
    expect(actions.toggleAnnotations(false)).toEqual(expectedAction);
  });

  it('should dispatch an action to update an annotation position', () => {
    const position = { x: 0.1, y: 0.1 };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      id: 'testID',
      position,
      type: actions.UPDATE_ANNOTATION_POSITION,
    };
    expect(actions.updateAnnotationPosition('testID', position)).toEqual(expectedAction);
  });

  it('should dispatch an action to update annotation list', () => {
    const list = {
      testID: {
        position: { x: 0.1, y: 0.1 },
        text: 'test',
      },
    };
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      list,
      type: actions.UPDATE_ANNOTATIONS,
    };
    expect(actions.updateAnnotations(list)).toEqual(expectedAction);
  });
});
