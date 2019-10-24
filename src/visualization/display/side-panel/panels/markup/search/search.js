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
}) => (
  <Section
    title="Search"
  >
    <div className="panel-search__input">
      <InputWithButton
        kind="secondary"
        buttonType="button"
        icon={faSearch}
        id="search"
        inputType="text"
        placeholder="Search term..."
        onClick={handleSearch}
        value={term}
      />
    </div>
    <div className="panel-search__grid">
      {
        term
        && (
          <Fragment>
            <span className="panel-search__label">
              Current query:
            </span>
            <span>
              {term}
            </span>
          </Fragment>
        )
      }
      <span className="panel-search__label">
        Clear search:
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
};

export default Search;
