import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import BodyCell from './table-body-cell';
import { TableBody as StyledTableBody } from './table-body-style';
import Tooltip from './table-body-tooltip';

import isOdd from '../../../utils/is-odd';

const getRowStyle = (index) => (
  isOdd(index) ? 'table__body-row_odd' : 'table__body-row_even'
);

const TableBody = forwardRef((
  {
    fieldOrder,
    handleMouseOut,
    handleMouseOver,
    gridTemplateColumns,
    minWidth,
    rowHeight,
    rows,
    tooltip,
  },
  ref,
) => (
  <>
    <Tooltip
      minHeight={rowHeight}
      tooltip={tooltip}
    />
    <StyledTableBody
      onBlur={handleMouseOut}
      onFocus={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      style={{
        minWidth,
      }}
    >
      <div
        className="table__body"
        ref={ref}
        style={{
          gridTemplateColumns,
          gridTemplateRows: `repeat(${rows.length}, ${rowHeight}px)`,
        }}
      >
        {
          rows.map((row, rowIndex) => {
            const rowStyle = getRowStyle(rowIndex);
            return fieldOrder.map((key) => (
              <BodyCell
                alignment={row[key].align}
                className={rowStyle}
                content={row[key].content}
                key={`${row.rowID}-${key}`}
                showOverflow={row[key].showOverflow}
              />
            ));
          })
        }
      </div>
    </StyledTableBody>
  </>
));

TableBody.propTypes = {
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  gridTemplateColumns: PropTypes.string.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  minWidth: PropTypes.number.isRequired,
  rowHeight: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      rowID: PropTypes.string.isRequired,
    }),
  ).isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string,
    show: PropTypes.bool.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default TableBody;
