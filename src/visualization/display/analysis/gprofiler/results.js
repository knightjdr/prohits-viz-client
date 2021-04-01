import PropTypes from 'prop-types';
import React from 'react';

import Table from '../../../../components/table/table-container';

const Results = ({
  header,
  rows,
  width,
}) => (
  <div className="gprofiler-results__table">
    <Table
      fieldOrder={header.order}
      header={header.header}
      minWidth={width}
      sortBy="pValue"
      sortByDirection="ascending"
      rows={rows}
    />
  </div>
);

Results.propTypes = {
  header: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.shape({})),
    order: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  width: PropTypes.number.isRequired,
};

export default Results;
