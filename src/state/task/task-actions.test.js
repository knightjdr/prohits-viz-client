import * as actions from './task-actions';

describe('Task actions', () => {
  it('should dispatch an action to create a task', () => {
    const expectedAction = {
      id: 'taskID',
      type: actions.CREATE_TASK,
    };
    expect(actions.createTask('taskID')).toEqual(expectedAction);
  });

  it('should dispatch an action to update a task', () => {
    const status = {
      primaryFile: 'dotplot',
      status: 'complete',
      tool: 'dotplot',
    };

    const expectedAction = {
      id: 'taskID',
      status,
      type: actions.UPDATE_TASK_STATUS,
    };
    expect(actions.updateTaskStatus('taskID', status)).toEqual(expectedAction);
  });
});
