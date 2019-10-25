import PropTypes from 'prop-types';
import React from 'react';

import './search-result.css';

const calculateCooridinate = x => (
  x ? `calc(${x * 100}% - 5px)` : -5
);

const SearchResult = ({
  text,
  x,
  y,
}) => {
  const left = calculateCooridinate(x);
  const top = calculateCooridinate(y);
  return (
    <div
      className="panel-map__search-result"
      data-tooltip={text}
      data-tooltip-position="top"
      style={{
        left,
        top,
      }}
    />
  );
};

SearchResult.defaultProps = {
  x: null,
  y: null,
};

SearchResult.propTypes = {
  text: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
};

export default SearchResult;
