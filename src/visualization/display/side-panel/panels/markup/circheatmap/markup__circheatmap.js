import PropTypes from 'prop-types';
import React from 'react';

import Labels from '../common/labels/label-container';
import Search from '../common/search/search-container';

const Markup = ({
  labels,
}) => (
  <div className="panel panel__markup">
    <Search labels={labels} />
    <Labels labels={labels} />
  </div>
);

Markup.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Markup;
