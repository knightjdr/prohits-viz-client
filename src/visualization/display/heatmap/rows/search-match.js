import PropTypes from 'prop-types';
import React from 'react';

const SearchMatch = ({
  cellSize,
  name,
  openContextMenu,
  search,
  yPosition,
}) => (
  search.term
  && search.match
  && search.rows[name]
    ? (
      <rect
        data-name={name}
        fill="#4caf50"
        height={cellSize}
        onContextMenu={openContextMenu}
        width="100"
        x="0"
        y={yPosition * cellSize}
      />
    )
    : null
);

SearchMatch.propTypes = {
  cellSize: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  openContextMenu: PropTypes.func.isRequired,
  search: PropTypes.shape({
    match: PropTypes.bool,
    rows: PropTypes.shape({}),
    term: PropTypes.string,
  }).isRequired,
  yPosition: PropTypes.number.isRequired,
};

export default SearchMatch;
