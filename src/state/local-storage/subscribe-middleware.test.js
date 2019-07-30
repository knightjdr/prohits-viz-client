import subscribeMiddleware from './subscribe-middleware';
import { UPDATING_TASK_STATUS } from '../set/task-actions';

const getState = () => ({
  other: {},
  tasks: { list: ['a', 'b'] },
});
const next = action => ({
  type: action.type,
});

describe('Subscribe middleware', () => {
  let middleware;

  beforeAll(() => {
    const obj = {};
    localStorage.setItem('reduxState', JSON.stringify(obj));
    middleware = subscribeMiddleware({ getState })(next);
  });

  it('should not update store when action type is not a save type', () => {
    middleware({ type: 'TEST_ACTION' });
    expect(JSON.parse(localStorage.getItem('reduxState'))).toEqual({});
  });

  it('should update store when action type is a save type', () => {
    middleware({ type: UPDATING_TASK_STATUS });
    const expectedState = {
      tasks: getState().tasks,
    };
    expect(JSON.parse(localStorage.getItem('reduxState'))).toEqual(expectedState);
  });
});
