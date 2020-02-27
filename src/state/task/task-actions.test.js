import * as actions from './task-actions';

describe('Task actions', () => {
  it('should dispatch an action to create a task', () => {
    const expectedAction = {
      id: 'taskID',
      type: actions.CREATE_TASK,
    };
    expect(actions.createTask('taskID')).toEqual(expectedAction);
  });

  it('should dispatch an action to update tasks', () => {
    const tasks = {
      task1: {
        primaryFile: 'dotplot',
        status: 'complete',
        tool: 'dotplot',
      },
      task2: {
        primaryFile: 'dotplot',
        status: 'error',
        tool: 'dotplot',
      },
    };

    const expectedAction = {
      tasks,
      type: actions.UPDATE_TASKS,
    };
    expect(actions.updateTasks(tasks)).toEqual(expectedAction);
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
