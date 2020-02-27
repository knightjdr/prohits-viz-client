import defineLinks from './define-links';

describe('Define navbar links', () => {
  it('should return links with "tasks"', () => {
    const tasks = { task1: {} };

    const expected = ['tasks', 'analysis', 'visualization', 'news', 'help'];
    expect(defineLinks(tasks)).toEqual(expected);
  });

  it('should return links without "tasks"', () => {
    const tasks = {};

    const expected = ['analysis', 'visualization', 'news', 'help'];
    expect(defineLinks(tasks)).toEqual(expected);
  });
});
