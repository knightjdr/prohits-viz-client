import * as actions from './form-actions';

describe('Form actions', () => {
  it('should dispatch an action to update a form field', () => {
    const expectedAction = {
      field: 'field1',
      type: actions.SET_FORM_FIELD,
      value: 'value',
    };
    expect(actions.setFormField('field1', 'value')).toEqual(expectedAction);
  });

  it('should dispatch an action to update multiple form fields', () => {
    const fields = {
      field1: 1,
      field2: 2,
    };

    const expectedAction = {
      fields,
      type: actions.SET_FORM_FIELDS,
    };
    expect(actions.setFormFields(fields)).toEqual(expectedAction);
  });
});
