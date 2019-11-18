import PropTypes from 'prop-types';
import React from 'react';

import Caret from './caret';

const SortArrow = ({
  direction,
  handleSortRows,
  sortable,
  sortedBy,
  sortKey,
}) => (
  sortable
  && (
    <button
      className="table__header-sort-button"
      data-sort-key={sortKey}
      onClick={handleSortRows}
      type="button"
    >
      <Caret
        direction={direction}
        sortedBy={sortedBy}
      />
    </button>
  )
);

SortArrow.defaultProps = {
  sortable: false,
  sortKey: '',
};

SortArrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleSortRows: PropTypes.func.isRequired,
  sortable: PropTypes.bool,
  sortedBy: PropTypes.bool.isRequired,
  sortKey: PropTypes.string,
};

export default SortArrow;
