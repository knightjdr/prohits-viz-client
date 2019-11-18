import PropTypes from 'prop-types';
import React from 'react';

import Table from '../../../../components/table/table-container';

import columnDefinitions from './column-definitions';

const Results = ({
  data,
}) => (
  <div className="gprofiler-results__table">
    <Table
      fieldOrder={columnDefinitions.order}
      header={columnDefinitions.header}
      minWidth={775}
      sortBy="pValue"
      sortByDirection="ascending"
      rows={data}
    />
  </div>
);

Results.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default Results;
