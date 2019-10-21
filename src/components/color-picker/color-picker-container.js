import PropTypes from 'prop-types';
import React, { useState } from 'react';

import ColorPicker from './color-picker';

const ColorPickerContainer = ({
  color,
  onChange,
  placement,
}) => {
  const [pickerColor, setPickerColor] = useState(color);

  const handleChangeComplete = (selectedColor) => {
    const { hex } = selectedColor;
    setPickerColor(hex);
    if (onChange) {
      onChange(hex);
    }
  };

  return (
    <ColorPicker
      color={pickerColor}
      handleChangeComplete={handleChangeComplete}
      placement={placement}
    />
  );
};

ColorPickerContainer.defaultProps = {
  color: '#000',
  onChange: undefined,
  placement: ['center', 'bottom'],
};

ColorPickerContainer.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func,
  placement: PropTypes.arrayOf(PropTypes.string),
};

export default ColorPickerContainer;
