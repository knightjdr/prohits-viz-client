import PropTypes from 'prop-types';
import React from 'react';

import Results from './results';
import Warning from './warning';

import './gprofiler.css';

const Gprofiler = ({
  data,
  handleAddAnnotation,
  handleExportCSV,
}) => (
  <div className="gprofiler-results">
    <Warning numberOfResults={data.results.length} />
    <Results
      handleAddAnnotation={handleAddAnnotation}
      handleExportCSV={handleExportCSV}
    />
  </div>
);

Gprofiler.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,
  }).isRequired,
  handleAddAnnotation: PropTypes.func.isRequired,
  handleExportCSV: PropTypes.func.isRequired,
};

export default Gprofiler;
