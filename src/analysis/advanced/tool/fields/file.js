import PropTypes from 'prop-types';
import React from 'react';

import AdvancedField from './advanced-field-container';
import File from '../../../../components/input/file/input-file-container';

const AdvancedInput = ({
  helpMessage,
  helpTitle,
  id,
  label,
  ...props
}) => (
  <AdvancedField
    className="analysis__advanced-field-file"
    message={helpMessage}
    modalID={id}
    title={helpTitle}
  >
    {
      label
      && (
        <label htmlFor={id}>
          {label}
          :
        </label>
      )
    }
    <File
      id={id}
      {...props}
    />
  </AdvancedField>
);

AdvancedInput.defaultProps = {
  label: '',
};

AdvancedInput.propTypes = {
  helpMessage: PropTypes.node.isRequired,
  helpTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default AdvancedInput;
