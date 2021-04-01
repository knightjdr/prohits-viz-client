import PropTypes from 'prop-types';
import React, {
  useMemo,
  useEffect,
  useRef,
  useState,
} from 'react';

import Table from './table';

import createGridTemplateColumns from './create-grid-template-columns';
import defineSortDirection, { DEFAULT_SORT_DIRECTION } from './define-sort-direction';
import setHeadPadding from './set-head-padding';
import sortRows from './sort-rows';
import useWindowDimension from '../../hooks/window-size/use-window-dimension';

const TableContainer = ({
  fieldOrder,
  header,
  minWidth,
  rowHeight,
  rows,
  sortBy,
  sortByDirection,
}) => {
  const bodyRef = useRef();
  const headerRef = useRef();
  const [sortDirection, setSortDirection] = useState(sortByDirection);
  const [sortField, setSortField] = useState(sortBy);

  const windowResized = useWindowDimension();

  const gridTemplateColumns = useMemo(
    () => createGridTemplateColumns(header),
    [header],
  );

  const sortedRows = useMemo(
    () => sortRows(rows, sortField, sortDirection, header),
    [rows, sortField, sortDirection, header],
  );

  useEffect(() => {
    setHeadPadding(bodyRef.current, headerRef.current);
  }, [windowResized]);

  const handleSortRows = (e) => {
    const { sortKey } = e.currentTarget.dataset;
    setSortDirection(defineSortDirection(sortField, sortKey, sortDirection));
    setSortField(sortKey);
  };

  const refs = {
    body: bodyRef,
    header: headerRef,
  };

  return (
    <Table
      fieldOrder={fieldOrder}
      gridTemplateColumns={gridTemplateColumns}
      handleSortRows={handleSortRows}
      header={header}
      minWidth={minWidth}
      ref={refs}
      rowHeight={rowHeight}
      rows={sortedRows}
      sortDirection={sortDirection}
      sortField={sortField}
    />
  );
};

TableContainer.defaultProps = {
  minWidth: 0,
  rowHeight: 35,
  sortBy: '',
  sortByDirection: DEFAULT_SORT_DIRECTION,
};

TableContainer.propTypes = {
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.node.isRequired,
      sort: PropTypes.func,
      sortable: PropTypes.bool,
      sortKey: PropTypes.string,
      width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    }),
  ).isRequired,
  minWidth: PropTypes.number,
  rowHeight: PropTypes.number,
  rows: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  sortBy: PropTypes.string,
  sortByDirection: PropTypes.string,
};

export default TableContainer;
