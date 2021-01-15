import PropTypes from 'prop-types';
import React from 'react';

import CommonTransformations from '../common/transformations';
import MockConditionAbundance from '../common/mock-abundance-container';
import Select from '../fields/select';

const Transformations = ({
  errors,
  form,
  handleChange,
  help,
}) => (
  <section>
    <h2>Data transformation</h2>
    <CommonTransformations errors={errors} help={help} />
    <Select
      helpMessage={help.logBase}
      helpTitle="Log transformation"
      id="logBase"
      label="Log transformation"
      onChange={handleChange}
      options={['none', '2', 'e', '10']}
      value={form.logBase}
      warning={errors.logBase}
    />
    <MockConditionAbundance help={help} />
  </section>
);

Transformations.propTypes = {
  errors: PropTypes.shape({
    logBase: PropTypes.string,
  }).isRequired,
  form: PropTypes.shape({
    logBase: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  help: PropTypes.shape({
    logBase: PropTypes.string,
  }).isRequired,
};

export default Transformations;
