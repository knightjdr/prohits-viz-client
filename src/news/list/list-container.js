import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetch from '../../utils/fetch';
import List from './list';
import { fillNews, getNews, newsError } from '../../state/news/news-actions';
import { stateSelector } from '../../state/selector/general';

const ListContainer = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => stateSelector(state, 'news'));

  useEffect(() => {
    const fetchContent = async () => {
      dispatch(getNews());
      const response = await fetch('/news');
      if (!response.error) {
        dispatch(fillNews(response.data));
      } else {
        dispatch(newsError());
      }
    };
    if (!news.isLoaded) {
      fetchContent();
    }
  }, [dispatch, news.isLoaded]);

  return (
    <List
      articles={news.articles}
      error={news.error}
      isLoaded={news.isLoaded}
    />
  );
};

export default ListContainer;
