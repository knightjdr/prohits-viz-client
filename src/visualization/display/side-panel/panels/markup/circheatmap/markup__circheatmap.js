import PropTypes from 'prop-types';
import React from 'react';

import Labels from './labels/label-container';
import Search from './search/search-container';

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
