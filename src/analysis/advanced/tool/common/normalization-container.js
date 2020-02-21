import PropTypes from 'prop-types';
import React from 'react';

import Normalization from './normalization';

import useFormUpdate from './use-form-update';

const NormalizationContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Normalization
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

NormalizationContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default NormalizationContainer;
