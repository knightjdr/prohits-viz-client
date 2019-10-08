import { selectData, selectDataProperty } from './data-selector';

const state = {
  element: {
    main: {
      key: 'a',
    },
  },
  tabs: {
    active: 'main',
  },
};

describe('Data selector', () => {
  it('should return data for active tab', () => {
    const expected = {
      key: 'a',
    };
    expect(selectData(state, 'element')).toEqual(expected);
  });

  it('should return data property for active tab', () => {
    const expected = 'a';
    expect(selectDataProperty(state, 'element', 'key')).toEqual(expected);
  });
});
