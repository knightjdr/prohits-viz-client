import PropTypes from 'prop-types';
import React from 'react';
import { ChromePicker } from 'react-color';

import ModalButton from '../modal-button/modal-button-container';

const ColorPicker = ({
  button,
  color,
  handleChangeComplete,
  placement,
}) => (
  <ModalButton
    button={button}
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
  button: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  handleChangeComplete: PropTypes.func.isRequired,
  placement: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorPicker;
