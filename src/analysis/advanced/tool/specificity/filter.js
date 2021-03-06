import PropTypes from 'prop-types';
import React from 'react';

import Input from '../fields/input';
import ScoreType from '../common/score-type-container';

const Filtering = ({
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
  </section>
);

Filtering.propTypes = {
  errors: PropTypes.shape({
    minAbundance: PropTypes.string,
    primaryFilter: PropTypes.string,
    scoreType: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    minAbundance: PropTypes.number,
    primaryFilter: PropTypes.number,
    scoreType: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    minAbundance: PropTypes.node,
    primaryFilter: PropTypes.node,
    scoreType: PropTypes.node,
  }).isRequired,
};

export default Filtering;
