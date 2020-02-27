import rehydrate, { filterTasks } from './rehydrate';

const localStorageMock = (() => {
  const store = {};
  return {
    getItem: key => store[key] || null,
    removeItem: (key) => {
      delete store[key];
    },
    setItem: (key, value) => {
      store[key] = value.toString();
    },
  };
})();

const originalLocalStorage = window.localStorage;
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

afterAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: originalLocalStorage,
  });
});

describe('Rehydrate redux state', () => {
  afterEach(() => {
    localStorage.removeItem('cookies');
    localStorage.removeItem('tasks');
  });

  it('should return empty object when nothing is in local storage', () => {
    expect(rehydrate()).toEqual({});
  });

  it('should return object for fields in local storage', () => {
    const currentDate = new Date();
    const expiredDate = new Date(currentDate - 90000000).toISOString(); // > 24hrs
    const validDate = new Date(currentDate - 86000000).toISOString(); // < 24hrs
    const tasks = {
      task1: {
        date: expiredDate,
        status: 'complete',
      },
      task2: {
        date: validDate,
        status: 'error',
      },
    };
    localStorage.setItem('cookies', JSON.stringify(true));
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const expected = {
      cookies: true,
      tasks: {
        task2: tasks.task2,
      },
    };
    expect(rehydrate()).toEqual(expected);
  });

  it('should omit fields not in local storage', () => {
    localStorage.setItem('cookies', JSON.stringify(true));

    const expected = {
      cookies: true,
    };
    expect(rehydrate()).toEqual(expected);
  });
});

describe('Filter tasks', () => {
  it('should return undefined when there are no tasks', () => {
    const tasks = null;
    expect(filterTasks(tasks)).toBeUndefined();
  });

  it('should return undefined when no tasks pass date and name filters', () => {
    const currentDate = new Date();
    const expiredDate = new Date(currentDate - 90000000).toISOString(); // > 24hrs
    const validDate = new Date(currentDate - 86000000).toISOString(); // < 24hrs
    const tasks = {
      samplefile: {
        date: validDate,
        status: 'complete',
      },
      task1: {
        status: 'complete',
      },
      task2: {
        date: expiredDate,
        status: 'complete',
      },
    };

    expect(filterTasks(JSON.stringify(tasks))).toBeUndefined();
  });

  it('should filter tasks by name and date', () => {
    const currentDate = new Date();
    const expiredDate = new Date(currentDate - 90000000).toISOString(); // > 24hrs
    const validDate = new Date(currentDate - 86000000).toISOString(); // < 24hrs
    const tasks = {
      samplefile: {
        date: validDate,
        status: 'complete',
      },
      task1: {
        status: 'complete',
      },
      task2: {
        date: expiredDate,
        status: 'complete',
      },
      task3: {
        date: validDate,
        status: 'error',
      },
    };

    const expected = {
      task3: {
        date: validDate,
        status: 'error',
      },
    };
    expect(filterTasks(JSON.stringify(tasks))).toEqual(expected);
  });
});
