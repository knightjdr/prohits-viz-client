import PropTypes from 'prop-types';
import React from 'react';

import Display from './display';

import useFormUpdate from '../common/use-form-update';

const DisplayContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Display
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

DisplayContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default DisplayContainer;
