import PropTypes from 'prop-types';
import React from 'react';

import Clustering from './clustering';

import useFormUpdate from '../../common/use-form-update';

const ClusteringContainer = ({
  errors,
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Clustering
      errors={errors}
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

ClusteringContainer.propTypes = {
  errors: PropTypes.shape({}).isRequired,
  help: PropTypes.shape({}).isRequired,
};

export default ClusteringContainer;
