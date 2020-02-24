import PropTypes from 'prop-types';
import React from 'react';

import Hierarchical from './hierarchical-clustering';

import useFormUpdate from './use-form-update';

const HierarchicalContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Hierarchical
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

HierarchicalContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default HierarchicalContainer;
