import PropTypes from 'prop-types';
import React from 'react';

import convertIsoDate from '../../utils/convert-iso-date';
import Link from '../../components/link/text/link';

import './news-list-item.css';

const NewsListItem = ({
  article,
}) => (
  <div className="news__list-item">
    <h2>{article.headline}</h2>
    <time>{convertIsoDate(article.dbDate)}</time>
    <p>{article.summary}</p>
    <Link
      href={`/news/${article.headline.replace(/\s/g, '-')}`}
    >
      more
    </Link>
  </div>
);

NewsListItem.propTypes = {
  article: PropTypes.shape({
    dbDate: PropTypes.string,
    headline: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
};

export default NewsListItem;
