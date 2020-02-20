import PropTypes from 'prop-types';
import React from 'react';

import Input from '../fields/input';
import Select from '../fields/select';

import help from '../help/help-dotplot';

const Filtering = ({
  errors,
  form,
  handleChange,
}) => (
  <section>
    <h2>Filtering</h2>
    <Select
      helpMessage={help.scoreType}
      helpTitle="Score type"
      id="scoreType"
      label="Score type"
      onChange={handleChange}
      options={[
        { label: 'smaller scores are better', value: 'lte' },
        { label: 'large scores are better', value: 'gte' },
      ]}
      value={form.scoreType}
      warning={errors.scoreType}
    />
    <Input
      helpMessage={help.primaryFilter}
      helpTitle="Primary filter"
      id="primaryFilter"
      label="Primary filter"
      onChange={handleChange}
      type="number"
      value={form.primaryFilter}
      warning={errors.primaryFilter}
    />
    <Input
      helpMessage={help.secondaryFilter}
      helpTitle="Secondary filter"
      id="secondaryFilter"
      label="Secondary filter"
      onChange={handleChange}
      type="number"
      value={form.secondaryFilter}
      warning={errors.secondaryFilter}
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
  errors: PropTypes.shape({
    abundanceCap: PropTypes.string,
    minAbundance: PropTypes.string,
    primaryFilter: PropTypes.string,
    scoreType: PropTypes.string,
    secondaryFilter: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    abundanceCap: PropTypes.number,
    minAbundance: PropTypes.number,
    primaryFilter: PropTypes.number,
    scoreType: PropTypes.string,
    secondaryFilter: PropTypes.number,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filtering;
