import PropTypes from 'prop-types';
import React from 'react';

import Divider from '../../components/divider/divider';
import Link from '../../components/link/text/link';
import Select from '../../components/select/select-container';

import './columns.css';

const Columns = ({
  errors,
  form,
  options,
  setColumn,
}) => (
  <div>
    <Divider>Columns</Divider>
    <p>
      Specify the columns to use if they have not been preselected. See the
      {' '}
      <Link
        href="/help"
        visited={false}
      >
        help
      </Link>
      {' '}
      to learn about how the columns are used during analysis.
    </p>
    <div className="analysis__column-selectors">
      <Select
        id="abundance"
        label="Abundance column"
        onChange={setColumn}
        options={options.abundance}
        placeholder="Select abundance column..."
        value={form.abundance}
        warning={errors.abundance}
      />
      <Select
        id="condition"
        label="Condition column"
        onChange={setColumn}
        options={options.condition}
        placeholder="Select condition column..."
        value={form.condition}
        warning={errors.condition}
      />
      <Select
        id="readout"
        label="Readout column"
        onChange={setColumn}
        options={options.readout}
        placeholder="Select readout column..."
        value={form.readout}
        warning={errors.readout}
      />
      <Select
        id="score"
        label="Score column"
        onChange={setColumn}
        options={options.score}
        placeholder="Select score column..."
        value={form.score}
        warning={errors.score}
      />
    </div>
  </div>
);

Columns.propTypes = {
  errors: PropTypes.shape({
    abundance: PropTypes.string,
    condition: PropTypes.string,
    readout: PropTypes.string,
    score: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    abundance: PropTypes.string,
    condition: PropTypes.string,
    readout: PropTypes.string,
    score: PropTypes.string,
  }).isRequired,
  options: PropTypes.shape({
    abundance: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        optGroup: PropTypes.bool,
        value: PropTypes.string,
      }),
    ).isRequired,
    condition: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        optGroup: PropTypes.bool,
        value: PropTypes.string,
      }),
    ).isRequired,
    readout: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        optGroup: PropTypes.bool,
        value: PropTypes.string,
      }),
    ).isRequired,
    score: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        optGroup: PropTypes.bool,
        value: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  setColumn: PropTypes.func.isRequired,
};

export default Columns;
