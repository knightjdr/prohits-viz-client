import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import './context-menu.css';

const Columns = ({
  reference,
  setReference,
  sortAscending,
  sortDescending,
  target,
  unsetReference,
}) => (
  <Fragment>
    <li>
      <button
        onClick={sortAscending}
        type="button"
      >
        Sort ascending
      </button>
    </li>
    <li>
      <button
        onClick={sortDescending}
        type="button"
      >
        Sort descending
      </button>
    </li>
    {
      reference !== target
        ? (
          <li>
            <button
              onClick={setReference}
              type="button"
            >
              Set as reference
            </button>
          </li>
        )
        : (
          <li>
            <button
              onClick={unsetReference}
              type="button"
            >
              Unset as reference
            </button>
          </li>
        )
    }
  </Fragment>
);

Columns.defaultProps = {
  reference: '',
};

Columns.propTypes = {
  reference: PropTypes.string,
  setReference: PropTypes.func.isRequired,
  sortAscending: PropTypes.func.isRequired,
  sortDescending: PropTypes.func.isRequired,
  target: PropTypes.string.isRequired,
  unsetReference: PropTypes.func.isRequired,
};

export default Columns;
