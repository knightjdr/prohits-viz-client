import PropTypes from 'prop-types';
import React from 'react';

import Input from '../../../components/input/text/input-text-container';
import Link from '../../../components/link/text/link';

export const defaultFieldValues = {
  columns: ['Bait', 'PreyGene'],
};

const TextSymbolFix = ({
  error,
  columns,
  handleUtilityField,
}) => (
  <>
    <p className="utility__description">
      Check for any gene symbols in a tab-delimited text or .xlsx file
      that may have been corrupted by Excel. For a discussion of this
      subject, see:
      {' '}
      <Link to="https://bmcbioinformatics.biomedcentral.com/articles/10.1186/1471-2105-5-80">
        Zeeberg, et al. (2004)
      </Link>
      {' '}
      and
      {' '}
      <Link to="https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008984">
        Abeysooriya, et al. (2021)
      </Link>
      . This utility was designed for human genes but will be generally suitable for all
      mammalian species. Not all corrupted symbols can be unambiguously mapped
      to a single gene. Where possible symbols are fixed but please inspect the output summary
      file for outstanding issues.
    </p>
    <Input
      label="Columns to check"
      id="columns"
      onChange={handleUtilityField}
      placeholder="Columns to check (leave blank to check all)..."
      type="text"
      value={columns.join(', ')}
      vertical
      warning={error}
    />
  </>
);

TextSymbolFix.defaultProps = {
  error: '',
  ...defaultFieldValues,
};

TextSymbolFix.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.string,
  ),
  error: PropTypes.string,
  handleUtilityField: PropTypes.func.isRequired,
};

export default TextSymbolFix;
