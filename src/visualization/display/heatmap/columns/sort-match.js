import PropTypes from 'prop-types';
import React from 'react';

const definePolygon = (direction, width, index) => {
  const x = index * width;
  const x2 = x + width;
  return direction === 'desc'
    ? `${x2} 0 ${x} 0 ${x} 100`
    : `${x} 0 ${x2} 100 ${x} 100`;
};

const SortMatch = ({
  cellSize,
  columnIndex,
  name,
  openContextMenu,
  sortBy,
  sortDirection,
}) => (
  sortBy
  && sortBy === name
  && sortDirection
  && (
    <svg
      className="heatmap__sort-polygon"
      height={100}
      style={{
        left: columnIndex * cellSize,
      }}
      width={cellSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        data-name={name}
        fill="#f48fb1"
        onContextMenu={openContextMenu}
        points={definePolygon(sortDirection, cellSize, 0)}
      />
    </svg>
  )
);

SortMatch.defaultProps = {
  sortBy: null,
  sortDirection: null,
};

SortMatch.propTypes = {
  cellSize: PropTypes.number.isRequired,
  columnIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  openContextMenu: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
  sortDirection: PropTypes.string,
};

export default SortMatch;
