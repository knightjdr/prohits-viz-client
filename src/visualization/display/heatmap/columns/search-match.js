import PropTypes from 'prop-types';
import React from 'react';

const SearchMatch = ({
  cellSize,
  name,
  openContextMenu,
  search,
  xPosition,
}) => (
  search.term
  && search.match
  && search.columns[name]
    ? (
      <rect
        data-name={name}
        fill="#4caf50"
        height="100"
        onContextMenu={openContextMenu}
        width={cellSize}
        x={xPosition * cellSize}
        y="0"
      />
    )
    : null
);

SearchMatch.propTypes = {
  cellSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  openContextMenu: PropTypes.func.isRequired,
  search: PropTypes.shape({
    columns: PropTypes.shape({}),
    match: PropTypes.bool,
    term: PropTypes.string,
  }).isRequired,
  xPosition: PropTypes.number.isRequired,
};

export default SearchMatch;
