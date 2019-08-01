import React from 'react';
import { shallow } from 'enzyme';

import textToHtml from '../../helpers/text-to-html';
import { NewsItemComponent } from './news-item';

// mock textToHtml
jest.mock('../../helpers/text-to-html');
textToHtml.mockReturnValue('test');

const testItem = {
  error: {
    error: true,
    isLoaded: false,
    isLoading: false,
    item: {},
  },
  init: {
    error: false,
    isLoaded: false,
    isLoading: false,
    item: {},
  },
  loaded: {
    error: false,
    isLoaded: true,
    isLoading: false,
    item: {
      date: 'test',
      details: 'test',
      hashtags: ['#test'],
      headline: 'test',
      _id: 'abcd',
    },
  },
  loading: {
    error: false,
    isLoaded: false,
    isLoading: true,
    item: {},
  },
};

describe('News item', () => {
  it('should render initially', () => {
    const wrapper = shallow(
      <NewsItemComponent
        newsItem={testItem.init}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('when loading', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <NewsItemComponent
          newsItem={testItem.loading}
        />,
      );
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should show loading component', () => {
      expect(wrapper.find('Loading').length).toBe(1);
    });

    it('should have loading component with no error', () => {
      const loading = wrapper.find('Loading');
      expect(loading.props().error).toBeFalsy();
    });
  });

  describe('when loaded', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <NewsItemComponent
          newsItem={testItem.loaded}
        />,
      );
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render new item', () => {
      expect(wrapper.find('.news__item-content').length).toBe(1);
    });
  });

  describe('with error', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(
        <NewsItemComponent
          newsItem={testItem.error}
        />,
      );
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should show loading component', () => {
      expect(wrapper.find('Loading').length).toBe(1);
    });

    it('should have loading component with error', () => {
      const loading = wrapper.find('Loading');
      expect(loading.props().error).toBeTruthy();
    });
  });
});
