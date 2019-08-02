import PropTypes from 'prop-types';
import React from 'react';

import convertIsoDate from '../../utils/convert-iso-date';
import Loading from '../../components/loading/loading';

import './article.css';

const NewsItem = ({
  article,
  error,
  isLoaded,
}) => {
  let content;
  if (error) {
    content = (
      <Loading
        error
        message="There was an error fetching the news"
      />
    );
  } else if (isLoaded) {
    content = (
      <div className="article">
        <div className="article__inner">
          <h1>{article.headline}</h1>
          <time>{convertIsoDate(article.dbDate)}</time>
          <div dangerouslySetInnerHTML={{ __html: article.html }} />
        </div>
      </div>
    );
  } else {
    content = <Loading isLoading />;
  }
  return content;
};

NewsItem.defaultProps = {
  article: {},
};

NewsItem.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string,
    headline: PropTypes.string,
    html: PropTypes.string,
  }),
};

export default NewsItem;
