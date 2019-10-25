import PropTypes from 'prop-types';
import React from 'react';

const defineDimensions = (direction, position, cellSize) => (
  direction === 'column'
    ? {
      height: 100,
      width: cellSize,
      x: position * cellSize,
      y: 0,
    }
    : {
      height: cellSize,
      width: 100,
      x: 0,
      y: position * cellSize,
    }
);

const SearchMatch = ({
  cellSize,
  direction,
  name,
  openContextMenu,
  searchMatches,
  position,
}) => {
  if (searchMatches[name] === undefined) {
    return null;
  }
  const dimensions = defineDimensions(direction, position, cellSize);
  return (
    <rect
      data-name={name}
      fill="#4caf50"
      height={dimensions.height}
      onContextMenu={openContextMenu}
      width={dimensions.width}
      x={dimensions.x}
      y={dimensions.y}
    />
  );
};

SearchMatch.propTypes = {
  cellSize: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  openContextMenu: PropTypes.func.isRequired,
  searchMatches: PropTypes.shape({}).isRequired,
  position: PropTypes.number.isRequired,
};

export default SearchMatch;
