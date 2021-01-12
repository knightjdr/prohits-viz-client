import PropTypes from 'prop-types';
import React from 'react';

import AdvancedField from './advanced-field-container';
import Input from '../../../../components/input/text/input-text-container';

const AdvancedInput = ({
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
    <Input
      id={id}
      vertical
      {...props}
    />
  </AdvancedField>
);

AdvancedInput.propTypes = {
  helpMessage: PropTypes.node.isRequired,
  helpTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AdvancedInput;
