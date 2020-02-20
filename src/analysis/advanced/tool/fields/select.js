import PropTypes from 'prop-types';
import React from 'react';

import AdvancedField from './advanced-field-container';
import Select from '../../../../components/select/select-container';

const AdvancedSelect = ({
  helpMessage,
  helpTitle,
  ...props
}) => (
  <AdvancedField
    message={helpMessage}
    title={helpTitle}
  >
    <Select
      {...props}
    />
  </AdvancedField>
);

AdvancedSelect.propTypes = {
  helpMessage: PropTypes.node.isRequired,
  helpTitle: PropTypes.string.isRequired,
};

export default AdvancedSelect;
