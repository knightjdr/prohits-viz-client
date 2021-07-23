import filterTasksToDisplay from './filter-tasks-to-display';

describe('Filter tasks to display', () => {
  it('should only return the task for the requested ID', () => {
    const id = 'aaa';
    const tasks = {
      aaa: {
        name: '',
        status: 'complete',
      },
      bbb: {
        name: '',
        status: 'complete',
      },
      ccc: {
        name: 'task3',
        status: 'complete',
      },
    };

    const expected = [
      {
        id: 'aaa',
        name: '',
        status: 'complete',
      },
    ];
    expect(filterTasksToDisplay(id, tasks)).toEqual(expected);
  });

  it('should return an empty list for a requested ID not available in tasks', () => {
    const id = 'ddd';
    const tasks = {
      aaa: {
        name: '',
        status: 'complete',
      },
      bbb: {
        name: '',
        status: 'complete',
      },
      ccc: {
        name: 'task3',
        status: 'complete',
      },
    };

    const expected = [];
    expect(filterTasksToDisplay(id, tasks)).toEqual(expected);
  });

  it('should return all tasks when no specific ID requested', () => {
    const id = '';
    const tasks = {
      aaa: {
        name: '',
        status: 'complete',
      },
      bbb: {
        name: '',
        status: 'complete',
      },
      ccc: {
        name: 'task3',
        status: 'complete',
      },
    };

    const expected = [
      {
        id: 'aaa',
        name: '',
        status: 'complete',
      },
      {
        id: 'bbb',
        name: '',
        status: 'complete',
      },
      {
        id: 'ccc',
        name: 'task3',
        status: 'complete',
      },
    ];
    expect(filterTasksToDisplay(id, tasks)).toEqual(expected);
  });
});
