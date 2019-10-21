import PropTypes from 'prop-types';
import React from 'react';
import { ChromePicker } from 'react-color';
import { faPalette } from '@fortawesome/pro-duotone-svg-icons';

import IconButton from '../buttons/icon/button';
import ModalButton from '../modal-button/modal-button-container';

const OpenButton = (
  <IconButton
    icon={faPalette}
    kind="primary"
  />
);

const ColorPicker = ({
  color,
  handleChangeComplete,
  placement,
}) => (
  <ModalButton
    button={OpenButton}
    name="color-picker"
    placement={placement}
  >
    <ChromePicker
      color={color}
      disableAlpha
      onChangeComplete={handleChangeComplete}
    />
  </ModalButton>
);

ColorPicker.propTypes = {
  color: PropTypes.string.isRequired,
  handleChangeComplete: PropTypes.func.isRequired,
  placement: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorPicker;
