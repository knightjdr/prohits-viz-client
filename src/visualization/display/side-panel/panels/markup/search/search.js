import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { faSearch } from '@fortawesome/pro-solid-svg-icons';
import { faTrash } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../../../../../../components/buttons/icon/button';
import InputWithButton from '../../../../../../components/input/with-button/input-with-button-container';
import Section from '../../section/section';

import './search.css';

const Search = ({
  handleClear,
  handleSearch,
  term,
  warning,
}) => (
  <Section
    title="Search"
  >
    <div className="panel-markup__input">
      <InputWithButton
        kind="secondary"
        buttonType="button"
        icon={faSearch}
        id="search"
        inputType="text"
        placeholder="Search term..."
        onClick={handleSearch}
        value={term}
        warning={warning}
      />
    </div>
    <div className="panel-markup__grid">
      {
        term
        && (
          <Fragment>
            <span className="panel-markup__label">
              Current query:
            </span>
            <span className="panel-search__query">
              {term}
            </span>
          </Fragment>
        )
      }
      <span className="panel-markup__label">
        Clear search term:
      </span>
      <IconButton
        icon={faTrash}
        kind="warning"
        onClick={handleClear}
        type="button"
      />
    </div>
  </Section>
);

Search.propTypes = {
  handleClear: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired,
};

export default Search;
