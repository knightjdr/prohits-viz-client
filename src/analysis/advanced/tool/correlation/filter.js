import PropTypes from 'prop-types';
import React from 'react';

import Input from '../fields/input';
import MinimumConditions from '../common/minimum-conditions-container';
import ParsimoniousFiltering from '../common/parsimonious-filtering-container';
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
      helpMessage={help.readoutScoreFilter}
      helpTitle="Score filter for readout correlation"
      id="readoutScoreFilter"
      label="Score filter for readout correlation"
      onChange={handleChange}
      type="number"
      value={form.readoutScoreFilter}
      warning={errors.readoutScoreFilter}
    />
    <Input
      helpMessage={help.conditionAbundanceFilter}
      helpTitle="Abundance filter for readout correlation"
      id="conditionAbundanceFilter"
      label="Abundance filter for readout correlation"
      onChange={handleChange}
      type="number"
      value={form.conditionAbundanceFilter}
      warning={errors.conditionAbundanceFilter}
    />
    <Input
      helpMessage={help.conditionScoreFilter}
      helpTitle="Score filter for condition correlation"
      id="conditionScoreFilter"
      label="Score filter for condition correlation"
      onChange={handleChange}
      type="number"
      value={form.conditionScoreFilter}
      warning={errors.conditionScoreFilter}
    />
    <Input
      helpMessage={help.readoutAbundanceFilter}
      helpTitle="Abundance filter for condition correlation"
      id="readoutAbundanceFilter"
      label="Abundance filter for condition correlation"
      onChange={handleChange}
      type="number"
      value={form.readoutAbundanceFilter}
      warning={errors.readoutAbundanceFilter}
    />
    <MinimumConditions errors={errors} help={help} />
    <ParsimoniousFiltering help={help} />
  </section>
);

Filtering.propTypes = {
  errors: PropTypes.shape({
    conditionAbundanceFilter: PropTypes.string,
    conditionScoreFilter: PropTypes.string,
    readoutAbundanceFilter: PropTypes.string,
    readoutScoreFilter: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    conditionAbundanceFilter: PropTypes.number,
    conditionScoreFilter: PropTypes.number,
    readoutAbundanceFilter: PropTypes.number,
    readoutScoreFilter: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    conditionAbundanceFilter: PropTypes.node,
    conditionScoreFilter: PropTypes.node,
    readoutAbundanceFilter: PropTypes.node,
    readoutScoreFilter: PropTypes.node,
  }).isRequired,
};

export default Filtering;
