import PropTypes from 'prop-types';
import React from 'react';

import SearchResult from './search-result';

import './search-results.css';

const renderMatches = (matches, limit, vertex) => (
  Object.keys(matches).length > 0
  && Object.entries(matches).map(([name, index]) => {
    const props = {
      [vertex]: index / limit,
    };
    return (
      <SearchResult
        key={name}
        text={name}
        {...props}
      />
    );
  })
);

const SearchResults = ({
  columnMatches,
  columnNumber,
  match,
  rowMatches,
  rowNumber,
}) => (
  match
  && (
    <>
      {renderMatches(columnMatches, columnNumber, 'x')}
      {renderMatches(rowMatches, rowNumber, 'y')}
    </>
  )
);

SearchResults.propTypes = {
  columnMatches: PropTypes.shape({}).isRequired,
  columnNumber: PropTypes.number.isRequired,
  match: PropTypes.bool.isRequired,
  rowMatches: PropTypes.shape({}).isRequired,
  rowNumber: PropTypes.number.isRequired,
};

export default SearchResults;
