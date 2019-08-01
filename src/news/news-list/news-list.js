import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/pro-duotone-svg-icons';

import Loading from '../../components/loading/loading';
import NewsListItem from './news-list-item';

import './news-list.css';

const NewList = ({
  articles,
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
      <div className="news__list">
        <div className="news__list-inner">
          <h1>
            <FontAwesomeIcon icon={faNewspaper} size="lg" />
            News
          </h1>
          {
            articles.map(article => (
              <NewsListItem
                article={article}
                key={article.headline}
              />
            ))
          }
        </div>
      </div>
    );
  } else {
    content = <Loading isLoading />;
  }
  return content;
};

NewList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      details: PropTypes.string,
      headline: PropTypes.string,
    }),
  ).isRequired,
  error: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default NewList;
