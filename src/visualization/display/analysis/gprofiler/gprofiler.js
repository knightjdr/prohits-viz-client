import PropTypes from 'prop-types';
import React from 'react';

import Export from './export';
import Results from './results';
import Warning from './warning';

import './gprofiler.css';

const Gprofiler = ({
  handleExportCSV,
  tableHeader,
  tableRows,
  tableWidth,
}) => (
  <div className="gprofiler-results">
    <Warning numberOfResults={tableRows.length} />
    <Results
      header={tableHeader}
      rows={tableRows}
      width={tableWidth}
    />
    <Export
      handleExportCSV={handleExportCSV}
    />
  </div>
);

Gprofiler.propTypes = {
  handleExportCSV: PropTypes.func.isRequired,
  tableHeader: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.shape({})),
    order: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  tableRows: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  tableWidth: PropTypes.number.isRequired,
};

export default Gprofiler;
