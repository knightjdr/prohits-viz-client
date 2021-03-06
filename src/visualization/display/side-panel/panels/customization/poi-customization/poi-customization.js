import PropTypes from 'prop-types';
import React from 'react';

import ButtonRectangular from '../../../../../../components/buttons/rectangular/button';
import ColorPicker from '../../../../../../components/color-picker/color-picker-container';
import Input from '../../../../../../components/input/text/input-text-container';

import './poi-customization.css';

const PoiCustomization = ({
  color,
  handleAddCustomizations,
  handleColorChange,
  handleLabelChange,
  handleRadiusChange,
  label,
  radius,
}) => (
  <div className="poi-customization">
    <Input
      className="poi-customization__label"
      id="customization-label"
      label="Label"
      onChange={handleLabelChange}
      placeholder="Group label..."
      type="text"
      value={label}
    />
    <Input
      className="poi-customization__radius"
      id="customization-size"
      label="Size"
      min={1}
      onChange={handleRadiusChange}
      step={1}
      type="number"
      value={radius}
    />
    <div className="poi-customization__color-label">
      <div>Colour (</div>
      <div
        className="poi-customization__color-indicator"
        style={{ backgroundColor: color }}
      />
      <div>):</div>
    </div>
    <ColorPicker
      color={color}
      modalID="poi-customization"
      onChange={handleColorChange}
      placement={['right', 'center']}
    />
    <div className="poi-customization__submit">
      <ButtonRectangular
        kind="primary"
        onClick={handleAddCustomizations}
      >
        Create group
      </ButtonRectangular>
    </div>
  </div>
);

PoiCustomization.propTypes = {
  color: PropTypes.string.isRequired,
  handleAddCustomizations: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleLabelChange: PropTypes.func.isRequired,
  handleRadiusChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
};

export default PoiCustomization;
