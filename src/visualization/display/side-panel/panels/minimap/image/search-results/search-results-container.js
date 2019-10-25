import React from 'react';
import { useSelector } from 'react-redux';

import SearchResults from './search-results';

import { selectData } from '../../../../../../../state/selector/visualization/data-selector';

const SearchResultsContainer = () => {
  const dimensions = useSelector(state => selectData(state, 'dimensions'));
  const searchStatus = useSelector(state => selectData(state, 'searchStatus'));

  const { columns: columnNumber, rows: rowNumber } = dimensions;
  const { columns: columnMatches, match, rows: rowMatches } = searchStatus;

  return (
    <SearchResults
      columnMatches={columnMatches}
      columnNumber={columnNumber}
      match={match}
      rowMatches={rowMatches}
      rowNumber={rowNumber}
    />
  );
};

export default SearchResultsContainer;
