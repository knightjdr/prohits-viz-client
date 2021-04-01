import PropTypes from 'prop-types';
import React from 'react';

import Actions from './actions';
import Results from './results';
import Warning from './warning';

import './gprofiler.css';

const Gprofiler = ({
  handleAddAnnotation,
  handleExportCSV,
  imageType,
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
    <Actions
      handleAddAnnotation={handleAddAnnotation}
      handleExportCSV={handleExportCSV}
      imageType={imageType}
    />
  </div>
);

Gprofiler.propTypes = {
  handleAddAnnotation: PropTypes.func.isRequired,
  handleExportCSV: PropTypes.func.isRequired,
  imageType: PropTypes.string.isRequired,
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
