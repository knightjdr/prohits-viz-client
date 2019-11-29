import PropTypes from 'prop-types';
import React from 'react';

import convertIsoDate from '../../utils/convert-iso-date';

const Article = ({
  dbDate,
  headline,
  html,
}) => (
  <div className="article">
    <div className="article__inner">
      <h1>{headline}</h1>
      <time>{convertIsoDate(dbDate)}</time>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
);

Article.propTypes = {
  dbDate: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default Article;
