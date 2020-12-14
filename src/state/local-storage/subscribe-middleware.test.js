import subscribeMiddleware from './subscribe-middleware';
import * as localStorage from '../../components/local-storage/local-storage';

jest.mock('../../components/local-storage/local-storage', () => ({
  setLocalStorage: jest.fn(),
}));
jest.mock('./save-actions', () => ({
  saveActions: ['SAVE_ACTION'],
  saveActionKey: {
    SAVE_ACTION: 'value',
  },
}));

const getState = () => ({
  value: {
    test: true,
  },
  other: {},
});
const next = (action) => ({
  type: action.type,
});

describe('Subscribe middleware', () => {
  let middleware;

  beforeAll(() => {
    middleware = subscribeMiddleware({ getState })(next);
  });

  it('should not update store when action type is not a save type', () => {
    localStorage.setLocalStorage.mockClear();
    middleware({ type: 'TEST_ACTION' });
    expect(localStorage.setLocalStorage).not.toHaveBeenCalled();
  });

  it('should update store when action type is a save type', () => {
    localStorage.setLocalStorage.mockClear();
    middleware({ consent: true, type: 'SAVE_ACTION' });
    expect(localStorage.setLocalStorage).toHaveBeenCalledWith('value', JSON.stringify({ test: true }));
  });
});
