import * as actions from './label-actions';

describe('Label actions', () => {
  it('should dispatch an action to update a label', () => {
    const expectedAction = {
      AUGMENT_WITH_ACTIVE_SNAPSHOT: true,
      label: 'labelA',
      type: actions.UPDATE_LABEL,
    };
    expect(actions.updateLabel('labelA')).toEqual(expectedAction);
  });
});
