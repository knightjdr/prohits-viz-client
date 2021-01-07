import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ColorPicker from './color-picker';
import ColorPickerButton from './color-picker-button';

const ColorPickerContainer = ({
  button,
  color,
  id,
  modalID,
  onChange,
  placement,
}) => {
  const [pickerColor, setPickerColor] = useState(color);

  const handleChangeComplete = (selectedColor) => {
    const { hex } = selectedColor;
    setPickerColor(hex);
    if (onChange) {
      onChange(hex, id);
    }
  };

  const modalName = modalID ? `color-picker-${modalID}` : 'color-picker';

  return (
    <ColorPicker
      button={button}
      color={pickerColor}
      handleChangeComplete={handleChangeComplete}
      modalName={modalName}
      placement={placement}
    />
  );
};

ColorPickerContainer.defaultProps = {
  button: ColorPickerButton,
  color: '#000',
  id: null,
  modalID: null,
  onChange: undefined,
  placement: ['center', 'bottom'],
};

ColorPickerContainer.propTypes = {
  button: PropTypes.node,
  color: PropTypes.string,
  id: PropTypes.string,
  modalID: PropTypes.string,
  onChange: PropTypes.func,
  placement: PropTypes.arrayOf(PropTypes.string),
};

export default ColorPickerContainer;
