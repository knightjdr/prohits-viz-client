import * as actions from './annotation-actions';

describe('Annotation actions', () => {
  it('should dispatch an action to set the color', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      color: '#ff0000',
      type: actions.SET_ANNOTATION_COLOR,
    };
    expect(actions.setAnnotationColor('#ff0000')).toEqual(expectedAction);
  });

  it('should dispatch an action to toggle showing annotations', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SELECTION: true,
      showAnnotations: false,
      type: actions.TOGGLE_ANNOTATIONS,
    };
    expect(actions.toggleAnnotations(false)).toEqual(expectedAction);
  });
});
