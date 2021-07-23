import addTaskNames from './add-task-names';

describe('Add local names to confirmed tasks', () => {
  it('should add user created names to task information from server', () => {
    const confirmedTasks = {
      bbb: {
        status: 'complete',
      },
      ccc: {
        name: 'task3',
        status: 'complete',
      },
      ddd: {
        name: 'task4',
        status: 'running',
      },
    };

    const localTasks = {
      aaa: {
        name: 'task1',
        status: 'complete',
      },
      bbb: {
        status: 'complete',
      },
      ccc: {
        name: 'task3',
        status: 'running',
      },
      ddd: {
        name: 'task4',
        status: 'running',
      },
    };

    const expected = {
      bbb: {
        name: '',
        status: 'complete',
      },
      ccc: {
        name: 'task3',
        status: 'complete',
      },
      ddd: {
        name: 'task4',
        status: 'running',
      },
    };
    expect(addTaskNames(localTasks, confirmedTasks)).toEqual(expected);
  });
});
