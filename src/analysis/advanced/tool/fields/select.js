import PropTypes from 'prop-types';
import React from 'react';

import AdvancedField from './advanced-field-container';
import Select from '../../../../components/select/select-container';

const AdvancedSelect = ({
  helpMessage,
  helpTitle,
  id,
  ...props
}) => (
  <AdvancedField
    message={helpMessage}
    modalID={id}
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
  id: PropTypes.string.isRequired,
};

export default AdvancedSelect;
