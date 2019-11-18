import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import BodyCell from './table-body-cell';
import StyledTableBody from './table-body-style';

import isOdd from '../../../utils/is-odd';

const getRowStyle = index => (
  isOdd(index) ? 'table__body-row_odd' : 'table__body-row_even'
);

const TableBody = forwardRef((
  {
    fieldOrder,
    gridTemplateColumns,
    minWidth,
    rowHeight,
    rows,
  },
  ref,
) => (
  <StyledTableBody
    ref={ref}
    style={{
      gridTemplateColumns,
      gridTemplateRows: `repeat(${rows.length}, ${rowHeight}px)`,
      minWidth,
    }}
  >
    {
      rows.map((row, rowIndex) => (
        fieldOrder.map(key => (
          <BodyCell
            alignment={row[key].align}
            className={getRowStyle(rowIndex)}
            content={row[key].content}
            key={`${row.rowID}-${key}`}
          />
        ))
      ))
    }
  </StyledTableBody>
));

TableBody.propTypes = {
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  gridTemplateColumns: PropTypes.string.isRequired,
  minWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      rowID: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TableBody;
