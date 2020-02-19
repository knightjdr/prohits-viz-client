import reducer, { defaultState } from './form-reducer';
import * as actions from './form-actions';

describe('Form reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('should handle RESET_FORM action', () => {
    const currentState = {
      ...defaultState,
      field1: 'value',
    };

    const action = {
      type: actions.RESET_FORM,
    };
    const expectedState = defaultState;
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_FORM_FIELD action', () => {
    const currentState = defaultState;
    const action = {
      field: 'field1',
      type: actions.SET_FORM_FIELD,
      value: 'value',
    };
    const expectedState = {
      ...currentState,
      field1: 'value',
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle SET_FORM_FIELDS action', () => {
    const fields = {
      field1: 1,
      field2: 2,
    };

    const currentState = defaultState;
    const action = {
      fields,
      type: actions.SET_FORM_FIELDS,
    };
    const expectedState = {
      ...currentState,
      ...fields,
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
