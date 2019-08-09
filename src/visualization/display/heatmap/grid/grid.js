import PropTypes from 'prop-types';
import React from 'react';

const Grid = ({
  cellSize,
  drawRow,
  edgeSize,
  offset,
  page,
}) => (
  <g
    clipPath="url(#clipPath)"
    transform="translate(100 100)"
  >
    {
      page.reduce((cells, row, i) => {
        const y = i * cellSize;
        cells.push(...drawRow(cellSize, row.data, y, edgeSize, offset));
        return cells;
      }, [])
    }
  </g>
);

Grid.propTypes = {
  cellSize: PropTypes.number.isRequired,
  drawRow: PropTypes.func.isRequired,
  edgeSize: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  page: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number,
        }),
      ),
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Grid;
