import PropTypes from 'prop-types';
import React from 'react';

import Noclustering from './noclustering';

import useFormUpdate from '../../common/use-form-update';

const NoclusteringContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Noclustering
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

NoclusteringContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default NoclusteringContainer;
