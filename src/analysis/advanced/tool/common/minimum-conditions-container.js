import PropTypes from 'prop-types';
import React from 'react';

import MinimumConditions from './minimum-conditions';

import useFormUpdate from './use-form-update';

const MinimumConditionsContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <MinimumConditions
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

MinimumConditionsContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default MinimumConditionsContainer;
