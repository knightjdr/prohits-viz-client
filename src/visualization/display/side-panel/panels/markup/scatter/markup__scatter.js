import PropTypes from 'prop-types';
import React from 'react';

import Labels from '../common/labels/label-container';
import Lines from './lines/line-container';
import Search from '../common/search/search-container';

const Markup = ({
  labels,
}) => (
  <div className="panel panel__markup">
    <Search
      helpLink="/help/visualization/scatterplot#markup-search"
      labels={labels}
    />
    <Labels
      helpLink="/help/visualization/scatterplot#markup-labels"
      labels={labels}
    />
    <Lines />
  </div>
);

Markup.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Markup;
