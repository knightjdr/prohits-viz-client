import * as moduleToMock from 'redux';

import { addDevTools } from './store';

moduleToMock.createStore = () => ({});
jest.setMock('redux', moduleToMock);

describe('Store in dev env', () => {
  beforeAll(() => {
    global.__REDUX_DEVTOOLS_EXTENSION__ = () => true;
  });

  it('should add dev tools compose enhancer if in dev env', () => {
    process.env.NODE_ENV = 'development';
    expect(addDevTools()).toBeTruthy();
  });

  it('should use redux compose function if in test env', () => {
    process.env.NODE_ENV = 'test';
    expect(typeof addDevTools()).toBe('function');
  });

  it('should use redux compose function if in prod env', () => {
    process.env.NODE_ENV = 'production';
    expect(typeof addDevTools()).toBe('function');
  });

  it('should use redux compose function if not defined', () => {
    process.env.NODE_ENV = 'development';
    global.__REDUX_DEVTOOLS_EXTENSION__ = null;
    expect(typeof addDevTools()).toBe('function');
  });
});
