import PropTypes from 'prop-types';
import React from 'react';

import Transformations from './transformations';

import useFormUpdate from './use-form-update';

const TransformationsContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Transformations
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

TransformationsContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default TransformationsContainer;
