import PropTypes from 'prop-types';
import React from 'react';

import AdvancedField from './advanced-field-container';
import Switch from '../../../../components/input/switch/switch-container';

const AdvancedSwitch = ({
  helpMessage,
  helpTitle,
  id,
  ...props
}) => (
  <AdvancedField
    iconMargin={false}
    message={helpMessage}
    modalID={id}
    title={helpTitle}
  >
    <Switch
      id={id}
      {...props}
    />
  </AdvancedField>
);

AdvancedSwitch.propTypes = {
  helpMessage: PropTypes.node.isRequired,
  helpTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default AdvancedSwitch;
