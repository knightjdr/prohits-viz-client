import reducer, { defaultState } from './display-reducer';
import * as actions from './display-actions';

describe('Display reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = defaultState;
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_PLOT_POSITION action', () => {
    const action = {
      fixed: true,
      translate: -200,
      type: actions.UPDATE_PLOT_POSITION,
    };
    const expectedState = {
      ...defaultState,
      plotFixed: true,
      plotTranslate: -200,
    };
    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
