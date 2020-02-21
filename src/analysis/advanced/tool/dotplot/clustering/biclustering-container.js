import PropTypes from 'prop-types';
import React from 'react';

import Biclustering from './biclustering';

import useFormUpdate from '../../common/use-form-update';

const BiclusteringContainer = ({
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Biclustering
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

BiclusteringContainer.propTypes = {
  help: PropTypes.shape({}).isRequired,
};

export default BiclusteringContainer;
