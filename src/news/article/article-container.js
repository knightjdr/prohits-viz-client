import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetch from '../../utils/fetch';
import Article from './article';
import { fillArticle, getArticle, articleError } from '../../state/news/article-actions';
import { selectState } from '../../state/selector/general';

const ArticleContainer = ({
  id,
}) => {
  const dispatch = useDispatch();
  const article = useSelector(state => selectState(state, 'article'));

  useEffect(() => {
    const fetchContent = async () => {
      dispatch(getArticle());
      const response = await fetch(`/news/${id}`);
      if (!response.error) {
        dispatch(fillArticle(id, response.data.article));
      } else {
        dispatch(articleError());
      }
    };
    if (!article.isLoaded) {
      fetchContent();
    }
  }, [dispatch, article.isLoaded, id]);

  return (
    <Article
      article={article.details}
      error={article.error}
      isLoaded={article.isLoaded}
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
