import PropTypes from 'prop-types';
import React from 'react';

import Actions from './actions';
import Results from './results';
import Warning from './warning';

import './gprofiler.css';

const Gprofiler = ({
  handleAddAnnotation,
  handleExportCSV,
  tableRows,
}) => (
  <div className="gprofiler-results">
    <Warning numberOfResults={tableRows.length} />
    <Results data={tableRows} />
    <Actions
      handleAddAnnotation={handleAddAnnotation}
      handleExportCSV={handleExportCSV}
    />
  </div>
);

Gprofiler.propTypes = {
  handleAddAnnotation: PropTypes.func.isRequired,
  handleExportCSV: PropTypes.func.isRequired,
  tableRows: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Gprofiler;
