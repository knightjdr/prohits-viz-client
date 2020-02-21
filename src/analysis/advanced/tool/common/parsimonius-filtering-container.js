import PropTypes from 'prop-types';
import React from 'react';

import ParsimoniousFiltering from './parsimonious-filtering';

import useFormUpdate from './use-form-update';

const ParsimoniousFilteringContainer = ({
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <ParsimoniousFiltering
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

ParsimoniousFilteringContainer.propTypes = {
  help: PropTypes.shape({}).isRequired,
};

export default ParsimoniousFilteringContainer;
