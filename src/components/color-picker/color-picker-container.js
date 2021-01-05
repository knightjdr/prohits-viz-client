import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ColorPicker from './color-picker';
import ColorPickerButton from './color-picker-button';

const ColorPickerContainer = ({
  button,
  color,
  id,
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

  return (
    <ColorPicker
      button={button}
      color={pickerColor}
      handleChangeComplete={handleChangeComplete}
      placement={placement}
    />
  );
};

ColorPickerContainer.defaultProps = {
  button: ColorPickerButton,
  color: '#000',
  id: null,
  onChange: undefined,
  placement: ['center', 'bottom'],
};

ColorPickerContainer.propTypes = {
  button: PropTypes.node,
  color: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placement: PropTypes.arrayOf(PropTypes.string),
};

export default ColorPickerContainer;
