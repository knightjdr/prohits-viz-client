import PropTypes from 'prop-types';
import React from 'react';

import Filtering from './filter';

import useFormUpdate from '../common/use-form-update';

const FilteringContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Filtering
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

FilteringContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default FilteringContainer;
