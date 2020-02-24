import PropTypes from 'prop-types';
import React from 'react';

import AdvancedField from './advanced-field-container';
import Switch from '../../../../components/input/switch/switch-container';

const AdvancedSwitch = ({
  helpMessage,
  helpTitle,
  ...props
}) => (
  <AdvancedField
    iconMargin={false}
    message={helpMessage}
    title={helpTitle}
  >
    <Switch
      {...props}
    />
  </AdvancedField>
);

AdvancedSwitch.propTypes = {
  helpMessage: PropTypes.node.isRequired,
  helpTitle: PropTypes.string.isRequired,
};

export default AdvancedSwitch;
