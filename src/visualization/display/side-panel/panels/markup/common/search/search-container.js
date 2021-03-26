import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Search from './search';

import searchLabels from './search-labels';
import { selectData } from '../../../../../../../state/selector/visualization/data-selector';
import {
  clearSearchStatus,
  setSearchStatusScatter,
} from '../../../../../../../state/visualization/markup/search-actions';

const SearchContainer = ({
  helpLink,
  labels,
}) => {
  const dispatch = useDispatch();
  const searchStatus = useSelector((state) => selectData(state, 'searchStatus'));

  const { match, term } = searchStatus;

  const handleClear = () => {
    dispatch(clearSearchStatus());
  };

  const handleSearch = (e, elementID, searchTerm) => {
    const searchResult = searchLabels(labels, searchTerm);
    dispatch(setSearchStatusScatter(searchTerm, searchResult));
  };

  const warning = term && !match ? 'No match found' : '';

  return (
    <Search
      handleClear={handleClear}
      handleSearch={handleSearch}
      helpLink={helpLink}
      term={term}
      warning={warning}
    />
  );
};

SearchContainer.defaultProps = {
  helpLink: '',
};

SearchContainer.propTypes = {
  helpLink: PropTypes.string,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SearchContainer;
