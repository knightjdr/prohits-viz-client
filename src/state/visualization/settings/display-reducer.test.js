import reducer from './display-reducer';
import * as actions from './display-actions';

describe('Display reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_PLOT_POSITION action', () => {
    const currentState = {
      main: {
        fixed: false,
        translate: 0,
      },
    };

    const action = {
      dataID: 'main',
      fixed: true,
      translate: -200,
      type: actions.UPDATE_PLOT_POSITION,
    };
    const expectedState = {
      ...currentState,
      main: {
        ...currentState.main,
        plotFixed: true,
        plotTranslate: -200,
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});
