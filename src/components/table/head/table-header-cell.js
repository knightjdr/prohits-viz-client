import PropTypes from 'prop-types';
import React from 'react';

import SortArrow from './sort-arrow';

const addTooltip = (cell) => (
  cell.tooltip
    ? {
      'data-tooltip': cell.tooltip,
      'data-tooltip-position': 'bottom',
    }
    : {}
);

const HeaderCell = ({
  cell,
  handleSortRows,
  sortDirection,
  sortField,
}) => (
  <div
    className="table__header-cell"
    {...addTooltip(cell)}
  >
    { cell.name }
    <SortArrow
      direction={sortDirection}
      handleSortRows={handleSortRows}
      sortable={cell.sortable}
      sortedBy={cell.sortKey === sortField}
      sortKey={cell.sortKey}
    />
  </div>
);

HeaderCell.propTypes = {
  cell: PropTypes.shape({
    name: PropTypes.node,
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    sortKey: PropTypes.string,
  }).isRequired,
  handleSortRows: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
};

export default HeaderCell;
