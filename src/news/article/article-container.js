import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadArticle from './load-article';

import fetch from '../../utils/fetch';
import isArticleLoaded from './is-article-loaded';
import { fillArticle, getArticle, articleError } from '../../state/news/article-actions';
import { selectState } from '../../state/selector/general';

const ArticleContainer = ({
  id,
}) => {
  const dispatch = useDispatch();
  const article = useSelector(state => selectState(state, 'article'));
  const [isLoaded, setLoaded] = useState(isArticleLoaded(id, article.id));

  useEffect(() => {
    const fetchContent = async () => {
      dispatch(getArticle());
      const response = await fetch(`/news/${id}`);
      if (!response.error) {
        dispatch(fillArticle(id, response.data.article));
        setLoaded(true);
      } else {
        dispatch(articleError());
      }
    };

    if (!isLoaded) {
      fetchContent();
    }
  }, [dispatch, id, isLoaded]);


  return (
    <LoadArticle
      article={article.details}
      error={article.error}
      isLoaded={isLoaded}
    />
  );
};

ArticleContainer.defaultProps = {
  id: '',
};

ArticleContainer.propTypes = {
  id: PropTypes.string,
};

export default ArticleContainer;
