import * as actions from './label-actions';

describe('Label actions', () => {
  it('should dispatch an action to clear all labels', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      type: actions.CLEAR_LABELS,
    };

    expect(actions.clearLabels()).toEqual(expectedAction);
  });

  it('should dispatch an action to toggle all labels', () => {
    const status = {
      labelA: true,
    };

    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      status,
      type: actions.TOGGLE_LABELS,
    };

    expect(actions.toggleLabels(status)).toEqual(expectedAction);
  });

  it('should dispatch an action to update a label', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      label: 'labelA',
      type: actions.UPDATE_LABEL,
    };
    expect(actions.updateLabel('labelA')).toEqual(expectedAction);
  });
});
