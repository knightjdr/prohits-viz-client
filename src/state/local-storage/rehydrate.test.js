import rehydrate from './rehydrate';

describe('Rehydrate redux state', () => {
  it('should return undefined when there is no state', () => {
    expect(rehydrate()).toBeUndefined();
  });

  it('should return object when there is state', () => {
    const obj = { field: 'test' };
    localStorage.setItem('reduxState', JSON.stringify(obj));
    expect(rehydrate()).toEqual(obj);
  });
});
