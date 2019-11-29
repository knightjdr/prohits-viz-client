import PropTypes from 'prop-types';
import React from 'react';

import Article from './article';
import Loading from '../../components/loading/page/loading';

import './article.css';

const NewsItem = ({
  article,
  error,
  isLoaded,
}) => {
  if (error) {
    return (
      <Loading
        error
        message="There was an error fetching the news"
      />
    );
  } if (isLoaded) {
    return (
      <Article
        dbDate={article.dbDate}
        headline={article.headline}
        html={article.html}
      />
    );
  }
  return <Loading isLoading />;
};

NewsItem.defaultProps = {
  article: {},
};

NewsItem.propTypes = {
  article: PropTypes.shape({
    dbDate: PropTypes.string,
    headline: PropTypes.string,
    html: PropTypes.string,
  }),
  error: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default NewsItem;
