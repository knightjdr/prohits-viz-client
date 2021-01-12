import PropTypes from 'prop-types';
import React from 'react';

import SpecificityOptions from './specificity-options';

import useFormUpdate from '../common/use-form-update';

const SpecificityOptionsContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <SpecificityOptions
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

SpecificityOptionsContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default SpecificityOptionsContainer;
