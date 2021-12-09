import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import HeaderCell from './table-header-cell';
import StyledTableHeader from './table-header-style';

const TableHeader = forwardRef((
  {
    gridTemplateColumns,
    handleSortRows,
    header,
    minWidth,
    sortField,
    sortDirection,
  },
  ref,
) => (
  <StyledTableHeader
    ref={ref}
    style={{
      gridTemplateColumns,
      minWidth,
    }}
  >
    {
      header.map((cell) => (
        <HeaderCell
          cell={cell}
          handleSortRows={handleSortRows}
          key={cell.name}
          sortDirection={sortDirection}
          sortField={sortField}
        />
      ))
    }
  </StyledTableHeader>
));

TableHeader.displayName = 'TableHeader';
TableHeader.propTypes = {
  gridTemplateColumns: PropTypes.string.isRequired,
  handleSortRows: PropTypes.func.isRequired,
  header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.node.isRequired,
      sortable: PropTypes.bool,
      sortDirection: PropTypes.string,
      sortKey: PropTypes.string,
      width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
  ).isRequired,
  minWidth: PropTypes.number.isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
};

export default TableHeader;
