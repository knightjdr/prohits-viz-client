import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Search from '../../common/search/search';

import useSearch from './use-search';
import { selectData } from '../../../../../../../state/selector/visualization/data-selector';
import {
  clearSearchStatus,
  setSearchStatusHeatmap,
} from '../../../../../../../state/visualization/markup/search-actions';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const searchStatus = useSelector((state) => selectData(state, 'searchStatus'));
  const search = useSearch();

  const { match, term } = searchStatus;

  const handleClear = () => {
    dispatch(clearSearchStatus());
  };

  const handleSearch = (e, elementID, searchTerm) => {
    const searchResult = search(searchTerm);
    dispatch(setSearchStatusHeatmap(searchTerm, searchResult));
  };

  const warning = term && !match ? 'No match found' : '';

  return (
    <Search
      handleClear={handleClear}
      handleSearch={handleSearch}
      helpLink="/help/visualization/heatmap#markup-search"
      term={term}
      warning={warning}
    />
  );
};

export default SearchContainer;
