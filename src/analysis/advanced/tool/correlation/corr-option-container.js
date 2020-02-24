import PropTypes from 'prop-types';
import React from 'react';

import CorrelationOptions from './corr-options';

import useFormUpdate from '../common/use-form-update';

const CorrelationOptionsContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <CorrelationOptions
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

CorrelationOptionsContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default CorrelationOptionsContainer;
