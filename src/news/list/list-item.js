import PropTypes from 'prop-types';
import React from 'react';

import convertIsoDate from '../../utils/convert-iso-date';
import Link from '../../components/link/text/link';

import './list-item.css';

const ListItem = ({
  article,
}) => (
  <div className="list__item">
    <h2>{article.headline}</h2>
    <time>{convertIsoDate(article.dbDate)}</time>
    <p>{article.summary}</p>
    <Link
      to={`/news/${article.headline.replace(/\s/g, '-')}`}
      outline={false}
    >
      read more
    </Link>
  </div>
);

ListItem.propTypes = {
  article: PropTypes.shape({
    dbDate: PropTypes.string,
    headline: PropTypes.string,
    summary: PropTypes.string,
  }).isRequired,
};

export default ListItem;
