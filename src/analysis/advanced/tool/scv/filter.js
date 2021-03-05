import PropTypes from 'prop-types';
import React from 'react';

import Input from '../fields/input';
import ScoreType from '../common/score-type-container';
import Select from '../fields/select';

const Filtering = ({
  abundanceColumnOptions,
  errors,
  form,
  handleChange,
  help,
}) => (
  <section>
    <h2>Filtering</h2>
    <ScoreType
      errors={errors}
      help={help}
    />
    <Input
      helpMessage={help.primaryFilter}
      helpTitle="Score filter"
      id="primaryFilter"
      label="Score filter"
      onChange={handleChange}
      type="number"
      value={form.primaryFilter}
      warning={errors.primaryFilter}
    />
    <Input
      helpMessage={help.minAbundance}
      helpTitle="Minimum abundance"
      id="minAbundance"
      label="Minimum abundance"
      onChange={handleChange}
      type="number"
      value={form.minAbundance}
      warning={errors.minAbundance}
    />
    <Select
      helpMessage={help.abundanceFilterColumn}
      helpTitle="Column for abundance filtering (primary abundance column)"
      id="specificityMetric"
      label="Column for abundance filtering"
      onChange={handleChange}
      options={abundanceColumnOptions}
      value={form.abundanceFilterColumn}
      warning={errors.abundanceFilterColumn}
    />
    <Input
      helpMessage={help.abundanceCap}
      helpTitle="Abundance cap"
      id="abundanceCap"
      label="Abundance cap"
      onChange={handleChange}
      type="number"
      value={form.abundanceCap}
      warning={errors.abundanceCap}
    />
  </section>
);

Filtering.propTypes = {
  abundanceColumnOptions: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  errors: PropTypes.shape({
    abundanceCap: PropTypes.string,
    abundanceFilterColumn: PropTypes.string,
    minAbundance: PropTypes.string,
    primaryFilter: PropTypes.string,
    scoreType: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    abundanceCap: PropTypes.number,
    abundanceFilterColumn: PropTypes.string,
    minAbundance: PropTypes.number,
    primaryFilter: PropTypes.number,
    scoreType: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    abundanceCap: PropTypes.node,
    abundanceFilterColumn: PropTypes.node,
    minAbundance: PropTypes.node,
    primaryFilter: PropTypes.node,
    scoreType: PropTypes.node,
  }).isRequired,
};

export default Filtering;
