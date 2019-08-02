import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/pro-duotone-svg-icons';
import { faRssSquare } from '@fortawesome/pro-solid-svg-icons';

import Link from '../../components/link/button/link';
import ListItem from './list-item';
import Loading from '../../components/loading/loading';

import './list.css';

const List = ({
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
      <div className="list">
        <div className="list__inner">
          <h1>
            <FontAwesomeIcon icon={faNewspaper} size="lg" />
            News
          </h1>
          {
            articles.map(article => (
              <ListItem
                article={article}
                key={article.headline}
              />
            ))
          }
          <Link
            className="list__rss"
            href={`${process.env.REACT_APP_URI}/rss.xml`}
            kind="default"
          >
            <FontAwesomeIcon icon={faRssSquare} />
          </Link>
        </div>
      </div>
    );
  } else {
    content = <Loading isLoading />;
  }
  return content;
};

List.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      details: PropTypes.string,
      headline: PropTypes.string,
    }),
  ).isRequired,
  error: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default List;
