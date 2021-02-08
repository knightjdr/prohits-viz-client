import PropTypes from 'prop-types';
import React from 'react';

import Output from './output';

import useFormUpdate from '../common/use-form-update';

const OutputContainer = ({
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <Output
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

OutputContainer.propTypes = {
  help: PropTypes.shape({}).isRequired,
};

export default OutputContainer;
