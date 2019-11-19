import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import StyledTable from './table-style';
import TableHeader from './head/table-header';
import TableBody from './body/table-body-container';

const Table = forwardRef((
  {
    fieldOrder,
    gridTemplateColumns,
    handleSortRows,
    header,
    minWidth,
    rowHeight,
    rows,
    sortDirection,
    sortField,
  },
  ref,
) => (
  <StyledTable>
    <TableHeader
      gridTemplateColumns={gridTemplateColumns}
      handleSortRows={handleSortRows}
      header={header}
      minWidth={minWidth}
      ref={ref.header}
      sortDirection={sortDirection}
      sortField={sortField}
    />
    <TableBody
      fieldOrder={fieldOrder}
      gridTemplateColumns={gridTemplateColumns}
      minWidth={minWidth}
      ref={ref.body}
      rowHeight={rowHeight}
      rows={rows}
    />
  </StyledTable>
));

Table.propTypes = {
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  gridTemplateColumns: PropTypes.string.isRequired,
  handleSortRows: PropTypes.func.isRequired,
  header: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  minWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
};

export default Table;
