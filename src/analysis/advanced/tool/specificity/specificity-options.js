import PropTypes from 'prop-types';
import React from 'react';

import Select from '../fields/select';

const SpecificityOptions = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <section>
    <h2>Specificity options</h2>
    <Select
      helpMessage={help.specificityMetric}
      helpTitle="Specificity metric"
      id="specificityMetric"
      label="Specificity metric"
      onChange={handleChange}
      options={[
        { label: 'fold enrichment', value: 'fe' },
        { label: 'Z-score', value: 'zscore' },
        { label: 'S-score', value: 'sscore' },
        { label: 'D-score', value: 'dscore' },
        { label: 'WD-score', value: 'wdscore' },
      ]}
      value={form.specificityMetric}
      warning={errors.specificityMetric}
    />
  </section>
);

SpecificityOptions.propTypes = {
  errors: PropTypes.shape({
    specificityMetric: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    specificityMetric: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    specificityMetric: PropTypes.node,
  }).isRequired,
};

export default SpecificityOptions;
