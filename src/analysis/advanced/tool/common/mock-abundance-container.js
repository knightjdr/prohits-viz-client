import PropTypes from 'prop-types';
import React from 'react';

import MockConditionAbundance from './mock-abundance';

import useFormUpdate from './use-form-update';

const MockConditionAbundanceContainer = ({
  help,
}) => {
  const [form, handleChange] = useFormUpdate();

  return (
    <MockConditionAbundance
      form={form}
      handleChange={handleChange}
      help={help}
    />
  );
};

MockConditionAbundanceContainer.propTypes = {
  help: PropTypes.shape({}).isRequired,
};

export default MockConditionAbundanceContainer;
