import PropTypes from 'prop-types';
import React from 'react';

import './search-match.css';

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
    <div
      className="heatmap__row-search-match"
      data-name={name}
      style={{
        height: dimensions.height,
        left: dimensions.x,
        top: dimensions.y,
        width: dimensions.width,
      }}
      onContextMenu={openContextMenu}
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
