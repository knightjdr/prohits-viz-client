import React from 'react';
import { shallow } from 'enzyme';

import FetchNewsItem from '../../state/get/news-item-actions';
import { NewsItemContainer } from './news-item-container';

// mock fetch
jest.mock('../../state/get/news-item-actions');
FetchNewsItem.mockReturnValue();

const match = {
  withId: {
    params: {
      newsId: 'a',
    },
  },
  withoutId: {
    params: {},
  },
};

describe('NewsItemContainer', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Fetch news is called on mount', () => {
    shallow(
      <NewsItemContainer
        fetchNewsItem={FetchNewsItem}
        match={match.withId}
      />,
    );
    expect(FetchNewsItem).toHaveBeenCalledTimes(1);
  });

  test('Fetch news is not called if ID is null', () => {
    shallow(
      <NewsItemContainer
        fetchNewsItem={FetchNewsItem}
        match={match.withoutId}
      />,
    );
    expect(FetchNewsItem).not.toHaveBeenCalled();
  });
});
