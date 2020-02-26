import reducer from './task-reducer';
import * as actions from './task-actions';

describe('Task reducer', () => {
  it('should return a default initial state', () => {
    const action = {};
    const expectedState = {};
    expect(reducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle CREATE_TASK action', () => {
    const currentState = {};

    const action = {
      id: 'taskID',
      type: actions.CREATE_TASK,
    };
    const expectedState = {
      taskID: { status: 'running' },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_TASK_STATUS action', () => {
    const currentState = {
      taskID: { status: 'running' },
    };

    const action = {
      id: 'taskID',
      status: {
        primaryFile: 'dotplot',
        status: 'complete',
        tool: 'dotplot',
      },
      type: actions.UPDATE_TASK_STATUS,
    };
    const expectedState = {
      taskID: {
        primaryFile: 'dotplot',
        status: 'complete',
        tool: 'dotplot',
      },
    };
    expect(reducer(currentState, action)).toEqual(expectedState);
  });
});