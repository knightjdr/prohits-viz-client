import { getLinkOrder } from './links';

describe('Link order for help footer', () => {
  it('should return object for finding previous and next links', () => {
    const links = [
      { route: '/a', text: 'A' },
      {
        children: [
          { route: '/b/a', text: 'BA' },
        ],
        route: '/b',
        text: 'B',
      },
      { route: '/c', text: 'C' },
      {
        children: [
          { route: '/d/a', text: 'DA' },
          { route: '/d/b', text: 'DB' },
        ],
        route: '/d',
        text: 'D',
      },
    ];
    const expected = {
      '/a': {
        previous: {},
        next: { route: '/b', text: 'B' },
      },
      '/b': {
        previous: { route: '/a', text: 'A' },
        next: { route: '/b/a', text: 'BA' },
      },
      '/b/a': {
        previous: { route: '/b', text: 'B' },
        next: { route: '/c', text: 'C' },
      },
      '/c': {
        previous: { route: '/b/a', text: 'BA' },
        next: { route: '/d', text: 'D' },
      },
      '/d': {
        previous: { route: '/c', text: 'C' },
        next: { route: '/d/a', text: 'DA' },
      },
      '/d/a': {
        previous: { route: '/d', text: 'D' },
        next: { route: '/d/b', text: 'DB' },
      },
      '/d/b': {
        previous: { route: '/d/a', text: 'DA' },
        next: {},
      },
    };
    expect(getLinkOrder(links)).toEqual(expected);
  });
});
